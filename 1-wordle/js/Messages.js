function win(){
    alert("Você Venceu");

    for (let round = 1; round<7; round++){
        for (let i=1; i<6; i++){
            displayLetter(round,i,3);
        }
    }
}

function loser(){
    alert("Você Perdeu");

    for (let round = 1; round<7; round++){
        for (let i = 1; i<6; i++){
            displayLetter(round,i,3);
        }
    }
}

function wrongChar(){    
    // alert("Digite uma letra válida");
}
//