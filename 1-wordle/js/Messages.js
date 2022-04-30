function win(){
    alert("Você Venceu");

    for (var r=1; r<7; r++){
        for (var l=1; l<6; l++){
            displayLetter(l,r,3);
        }
    }
}

function loser(){
    alert("Você Perdeu");

    for (var r=1; r<7; r++){
        for (var l=1; l<6; l++){
            displayLetter(l,r,3);
        }
    }
}