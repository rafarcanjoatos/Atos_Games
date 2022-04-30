function validateLeter(l,r){    
    leter = document.getElementById('leter_'+l+'_'+r).value;
    var noAccent = leter.replace(/[^\w\-]+/g, '-').replace(/[0-9]/g, '-');

    if((leter!=null)&&(leter!=0)&&(leter==noAccent)){
        nextWord(l,r);
    }
    else{
        document.getElementById('leter_'+l+'_'+r).value='';
    }
}

function validateCompleteWord(leter_1,leter_2,leter_3,leter_4,leter_5,r) {
    // Concatenate word of user
    wordOfUser = leter_1.concat(leter_2,leter_3,leter_4,leter_5);
    return startValidate(wordOfDay,wordOfUser,r);
}

function startValidate(wordOfDay,wordOfUser,r){
    var letersNoCut = wordOfDay;
    var letersOfDay = wordOfDay.split("");
    var letersUser = wordOfUser.split("");
    errou = [];
    quase = [];
    acertou = [];

    console.log(letersOfDay);
    console.log(letersUser);

        for (var l=0; l<5; l++){
            if (letersOfDay[l]==letersUser[l]){
                acertou += [l+1]
                document.getElementById('div_leter_'+[l+1]+'_'+r).style.backgroundColor = 'green';  
                displayLetter(l,r,0);
                
            }else if(letersNoCut.indexOf(letersUser[l]) != -1){
                quase += [l+1]
                document.getElementById('div_leter_'+[l+1]+'_'+r).style.backgroundColor = 'yellow';  
                displayLetter(l,r,0);
            }            
            else{
                errou += [l+1]            
                document.getElementById('div_leter_'+[l+1]+'_'+r).style.backgroundColor = 'red';  
                displayLetter(l,r,0);
            }
        }
    
    console.log("Acertou: "+acertou)
    console.log("Quase: "+quase)
    console.log("Errou: "+errou)

            
    displayButton(r,0,0);
    if(r<6){            
        displayButton((r+1),1,0);
        focusFirst(r);
    }

    //LOSER
    if(r==6){
        loser();
    }
    
    //WINNER
    acertos = acertou.length;
    if (acertou.length==5) {
        win();
    } 

    errou = [];
    quase = [];
    acertou = [];
}