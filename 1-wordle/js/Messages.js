function win(){
    alert("Você Venceu");

    for (var row=1; row<7; row++){
        for (var line=1; line<6; line++){
            displayLetter(line,row,3);
        }
    }
}

function loser(){
    alert("Você Perdeu");

    for (var row=1; row<7; row++){
        for (var line=1; line<6; line++){
            displayLetter(line,row,3);
        }
    }
}