var charSequence = 1;
var disableKeyboard = false;
var statusChar = 4;
var buttonSubmit = document.getElementById("button-submit");

var char = addEventListener("keydown", function (event){
    if (disableKeyboard == false){
        char = event.key;

        //Validating Char
        char = removeAccent(char);
        statusChar = validateChar(char,charSequence,statusChar,disableKeyboard);

        if (statusChar == 0){            
            //Incorrect Char Message  
            wrongChar();    
        }
        
        if (statusChar == 1){            
            //Delete Char in the Div
            charSequence -= 1;            
            inputChar = document.getElementById("char-"+round+"-"+charSequence);
            inputChar.textContent = "";

            //Disable Button
            enableButton(0,buttonSubmit);
        }

        if (statusChar == 2){              
            //Backspace Null
        }

        if(statusChar == 3){
            //Disable Keyboard
        }

        if(statusChar == 4){
            var wordOfUser = [];

            //Get Chars of the div    
            for(let i = 1; i <= wordLenght; i++){        
                var x = document.getElementById("char-"+round+"-"+i);
                wordOfUser.push(x.textContent);
            }
            
            //Validating Word
            startValidate(wordOfDay,wordOfUser,round);
        
            //Next Round
            round +=1;
            
            // Loser
            if(round==7){
                loser();
            }
        
            //Restart Div Focus
            charSequence = 1;
        
            //Disable Button
            enableButton(0,buttonSubmit);
        }

        if (statusChar == 5){    
            //Put Char in the Div
            inputChar = document.getElementById("char-"+round+"-"+charSequence);
            inputChar.textContent = char;
            
            //Last Char of Row
            if(charSequence == wordLenght){    
                //Next Char Div
                charSequence += 1;

                //Enable Button Send
                enableButton(1,buttonSubmit);
                
            }else{
                //Next Char Div
                charSequence += 1;
            }
        }
    }
})

function removeAccent(char){
    var validChars = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','ç','z','x','c','v','b','n','m','Backspace','Enter'];
    if(validChars.find(element => element == char) != null){
        return char;
    }else{
        char = 0;
        return char;
    }
}

function validateChar(char,charSequence,disableKeyboard){    
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
    if(char == 'Enter'){
        statusChar = 4;
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
//