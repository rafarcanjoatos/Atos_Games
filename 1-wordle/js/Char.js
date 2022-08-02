var charSequence = 1;
var statusChar = 4;


function removeAccent(char){
    var validChars = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','ç','z','x','c','v','b','n','m','Backspace','Enter'];
    if(validChars.find(element => element == char) != null){
        return char;
    }else{
        char = 0;
        return char;
    }
}

function validateChar(char,charSequence,statusChar,buttonSubmitDisabled){    
    //Wrong Char
    if(char == 0){
        statusChar = 0;
        return statusChar;
    }
    
    //Backspace Null
    if((char == 'Backspace')&&(charSequence == 1)){
        statusChar = 2;
        return statusChar;
    }

    //Backspace
    if((char == 'Backspace')&&(charSequence == wordLenght)){
        statusChar = 1;
        return statusChar;
    }

    //Backspace
    if(char == 'Backspace'){
        statusChar = 1;
        return statusChar;
    }    

    //Enter
    if((char == 'Enter')&&(buttonSubmitDisabled == false)){
        statusChar = 4;
        return statusChar;
    } 
    
    //Enter Incorrect
    if((char == 'Enter')&&(buttonSubmitDisabled == true)){
        statusChar = 3;
        return statusChar;
    }  

    //Wordlenght Limit
    if(charSequence > wordLenght){
        statusChar = 3;
        return statusChar;
    }

    //Return Char
    else{
        statusChar = 5;
        return statusChar;
    }   
}