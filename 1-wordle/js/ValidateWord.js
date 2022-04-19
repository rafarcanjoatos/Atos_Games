function validateWord(leter_1,leter_2,leter_3,leter_4,leter_5,line) {
    // Concatenate word of user
    value2 = leter_1.concat(leter_2,leter_3,leter_4,leter_5);
    return startValidate(value,value2,line);
}

function startValidate(value,value2,r){
    const letersOfDay = value.split("");
    let letersUser = value2.split("");
    let acertou;
    let errou;

    console.log(letersOfDay);
    console.log(letersUser);

        for (let l=0; l<5; l++){
            if (letersOfDay[l]==letersUser[l]){
                acertou += [l+1]
                document.getElementById('div_leter_'+[l+1]+'_'+r).style.backgroundColor = 'green';  
                document.getElementById('leter_'+[l+1]+'_'+r).readOnly = true;        
                
            }else{
                errou += [l+1]            
                document.getElementById('div_leter_'+[l+1]+'_'+r).style.backgroundColor = 'red';  
                document.getElementById('leter_'+[l+1]+'_'+r).readOnly = true;  
            }
            document.getElementById('button_'+r).style.display = 'none';
            document.getElementById('button_'+(r+1)).style.display = 'true';  
        }

    console.log("Acertou: "+acertou)
    console.log("Errou: "+errou)
    errou = [];
    acertou = [];    
}