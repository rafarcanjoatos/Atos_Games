function validateLeter(l,r){    
    leter = document.getElementById('leter_'+l+'_'+r).value;
    var noAccent = leter.replace(/[^\w\-]+/g, '-').replace(/[0-9]/g, '-');

    if((leter!=null)&&(leter!=0)&&(leter==noAccent)){
        nextWord(l,r,leter);
    }
    else{
        document.getElementById('leter_'+l+'_'+r).value='';
    }

}

function validateCompleteWord(leter_1,leter_2,leter_3,leter_4,leter_5,l) {
    // Concatenate word of user
    value2 = leter_1.concat(leter_2,leter_3,leter_4,leter_5);
    return startValidate(value,value2,l);
}

function startValidate(value,value2,r){
    var letersNoCut = value;
    var letersOfDay = value.split("");
    var letersUser = value2.split("");
    var acertou;
    var errou;
    var quase;

    console.log(letersOfDay);
    console.log(letersUser);

        for (var l=0; l<6; l++){
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
            
            displayButton(r,0,0);
            displayButton((r+1),1,0);
            focusFirst(r);
        }

    console.log("Acertou: "+acertou)
    console.log("Quase: "+quase)
    console.log("Errou: "+errou)
    errou = [];
    quase = [];
    acertou = [];    
}