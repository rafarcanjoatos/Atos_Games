var charSequence = 1;

var char = addEventListener("keypress", function(event){
    char = event.key;
    inputChar = document.getElementById("char-"+round+"-"+charSequence);
    inputChar.textContent = char;
    
    if(charSequence == wordLenght){
        round +=1;
        charSequence = 1;
    }else{
        charSequence += 1;
    }
})