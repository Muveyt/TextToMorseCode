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

