const morseCodeAlph ={
    A:"._",     B:"_...",   C:"_._.",   D:"_..",    E:".",      F:".._.",   G:"__.",    H:"....",   I:"..",     J:".___",
    K:"_._",    L:"._..",   M:"__",     N:"_.",     O:"___",    P:".__.",   Q:"__._",   R:"._.",    S:"...",    T:"_", 
    U:".._",    V:"..._",   W:".__",    X:"_.._",   Y:"_.__",   Z:"__..",   0:"____",   1:".____",  2:"..___",  3:"...__", 
    4:"...._",  5:".....",  6:"_....",  7:"__...",  8:"___..",  9:"____."
};

function translateToMorse(){
    const message = document.getElementById("message").value.toUpperCase();
    let morseCodeOutput = "";
    for(let i=0; i < message.length; i++){
        const char = message[i];
        if(morseCodeAlph[char]){
            morseCodeOutput += morseCodeAlph[char] + " ";
        }
        else{
            morseCodeOutput += " ";
        }
    }
    document.getElementById("output").textContent = morseCodeOutput;
}


async function playCode(frequency = 440){
    var messageOutput = document.getElementById("output").textContent;

    var speed = document.getElementById("speed").value;
    console.log(speed);
    console.log(messageOutput);
    const audioCtx = new AudioContext();
    const unit = speed;   // dot length in ms

    const dot = unit;
    const dash = unit * 3;
    const gap = unit ;           // between elements of same letter
    const letterGap = unit * 3; // between letters
    const wordGap = unit * 3;
    function beep(duration){
    
        const oscillator = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        oscillator.frequency.value = frequency;
        oscillator.connect(gain);
        gain.connect(audioCtx.destination);

        oscillator.start();
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + duration / 1000 );

        return new Promise(resolve => setTimeout(resolve, duration));
        }
    
        for (i=0; i < messageOutput.length ;i++) {
        if (messageOutput[i] == ".") {
            await beep(dot);
            await wait(gap);
        } else if (messageOutput[i] == "_") {
            await beep(dash);
            await wait(gap);
        } else if (messageOutput[i] == " ") {
            await wait(wordGap);
        }
    }

    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
