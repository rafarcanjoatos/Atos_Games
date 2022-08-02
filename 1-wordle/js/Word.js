function startValidate(wordOfDay,wordOfUser,round){
    var charsHitted = wordOfDay.split("");
    var charsOfDay = wordOfDay.split("");
    var charsUser = wordOfUser;
    var wrong = [];
    var near = [];
    var hit = [];

    console.log(charsOfDay);
    console.log(charsUser);

        for (var i = 0; i < 5; i++){
            if (charsOfDay[i]==charsUser[i]){
                hit += [i]
                var x = document.getElementById('char-'+round+'-'+(i+1));
                x.style.backgroundColor = 'green';  
                
            }else if(charsHitted.indexOf(charsUser[i]) != -1){
                near += [i]
                var y = document.getElementById('char-'+round+'-'+(i+1));
                y.style.backgroundColor = 'yellow';  

            }else{
                // charsHitted.splice(0,i);
                // console.log(charsHitted);
                // hit.indexOf(charsUser[i]) == 2
                // .filter(x => x === "oi").length                
                // console.log(charsOfDay[i]," x ",charsUser[i]," wrong");

                wrong += [i]            
                var z = document.getElementById('char-'+round+'-'+(i+1));
                z.style.backgroundColor = 'red';  
            }
        }
    
    console.log("Acertou: "+hit)
    console.log("Quase: "+near)
    console.log("Errou: "+wrong)
    
    // Winner
    acertos = hit.length;
    if (hit.length==5) {
        win();
    } 

    wrong = [];
    near = [];
    hit = [];
}
//