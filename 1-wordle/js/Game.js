//Parameters
var round = 1;
var roundLength = 6;
var wordLenght = 5;

//Get Main Div to add Rows and Chars
var answerDiv = document.getElementById("div-answer");

//Rules of roundLength
switch (round){
    case 1:        
        addAnswerRow(answerDiv,roundLength,wordLenght);
        break;
    case 6:
        alert ("aqui");
        break;  
}

function addAnswerRow(answerDiv,roundLength,wordLenght){
    for (let i = 1; i < roundLength+1; i++) {
        var answerRow = mountAnswerRow(wordLenght,i);
        answerDiv.appendChild(answerRow);    
    }
}

function mountAnswerRow(wordLenght,line){
    //Mount Rows of Game
    var answerRow = document.createElement("div");
    answerRow.setAttribute("name", "answer-row-"+line);
    answerRow.setAttribute("id", "answer-row-"+line)
    answerRow.classList.add("answer-row");
    
    //Mount Input for Chars
    
    for (let i = 1; i < wordLenght+1; i++) { 
        inputChar = addChar(line,i);        
        answerRow.appendChild(inputChar);
    }

    return answerRow;
}

function addChar(line,i){       
    var inputChar = mountInputChar(line,i);
    return inputChar;
}

function mountInputChar(line,numberOfChar){
    var inputChar = document.createElement("div");
    inputChar.setAttribute("name", "char-"+line+"-"+numberOfChar);
    inputChar.setAttribute("id", "char-"+line+"-"+numberOfChar)
    inputChar.classList.add("char");
    
    return inputChar;
}