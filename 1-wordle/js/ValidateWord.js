function validateWord(leter_1,leter_2,leter_3,leter_4,leter_5) {
    // Concatenate word of user
    value2 = leter_1.concat(leter_2,leter_3,leter_4,leter_5);

    return startValidate(value,value2);
}

function startValidate(value,value2){
    const lettersOfDay = value.split("");
    let lettersUser = value2.split("");
    let acertou;
    let errou;

    console.log(lettersOfDay);
    console.log(lettersUser);

    for (let $i=0; $i<5; $i++){
        if (lettersOfDay[$i]==lettersUser[$i]){
            acertou += [$i+1]
        }else{
            errou += [$i+1]
        }
    }

    console.log("Acertou: "+acertou)
    console.log("Errou: "+errou)
    errou = [];
    acertou = [];    
}