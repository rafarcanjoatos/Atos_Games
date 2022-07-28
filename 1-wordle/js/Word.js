

function validateLeter(line,row){    
    char = document.getElementById('char_'+line+'_'+row).value;
    var noAccent = char.replace(/[^\w\-]+/g, '-').replace(/[0-9]/g, '-');

    if((char!=null)&&(char!=0)&&(char==noAccent)){
        nextWord(line,row);
    }
    else{
        document.getElementById('char_'+line+'_'+row).value='';
    }
}

function validateCompleteWord(char_1,char_2,char_3,char_4,char_5,row) {
    // Concatenate word of user
    wordOfUser = char_1.concat(char_2,char_3,char_4,char_5);
    return startValidate(wordOfDay,wordOfUser,row);
}

function startValidate(wordOfDay,wordOfUser,row){
    var charsNoCut = wordOfDay;
    var charsOfDay = wordOfDay.split("");
    var charsUser = wordOfUser.split("");
    wrong = [];
    near = [];
    hit = [];

    console.log(charsOfDay);
    console.log(charsUser);

        for (var line=0; line<5; line++){
            if (charsOfDay[line]==charsUser[line]){
                hit += [line+1]
                document.getElementById('div_char_'+[line+1]+'_'+row).style.backgroundColor = 'green';  
                displayLetter(line,row,0);
                
            }else if(charsNoCut.indexOf(charsUser[line]) != -1){
                near += [line+1]
                document.getElementById('div_char_'+[line+1]+'_'+row).style.backgroundColor = 'yellow';  
                displayLetter(line,row,0);
            }            
            else{
                wrong += [line+1]            
                document.getElementById('div_char_'+[line+1]+'_'+row).style.backgroundColor = 'red';  
                displayLetter(line,row,0);
            }
        }
    
    console.log("Acertou: "+hit)
    console.log("Quase: "+near)
    console.log("Errou: "+wrong)

            
    displayButton(row,0,0);
    if(row<6){            
        displayButton((row+1),1,0);
        focusFirst(row);
    }

    // Loser
    if(row==7){
        loser();
    }
    
    // Winner
    acertos = hit.length;
    if (hit.length==5) {
        win();
    } 

    wrong = [];
    near = [];
    hit = [];
}