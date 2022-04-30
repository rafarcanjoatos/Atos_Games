//FOCUS
window.onload = function () {
    document.getElementById("leter_1_1").focus();
    displayButton(1,1,0);
}

function focusFirst(r){
    document.getElementById('leter_1_'+(r+1)).focus();
}

function nextWord(l,r,leter){
    if(l<5){
        l+=1;
        document.getElementById('leter_'+l+'_'+r).focus();
        displayLetter(l,r,1);
    }
    else{        
        displayButton(r,1,1);
    }
}

/*
onclick="alwaysFocus(<?php echo $l;?>,<?php echo $r;?>)"

function alwaysFocus(l,r){
    console.log(l,r);  

    for (var x=1; x<7; x++){
        
        console.log('Inicio'+x); 
        var leter = document.getElementById('leter_'+l+'_'+r).value;
        
        console.log(leter);  
        if (leter==null){
            
            document.getElementById('leter_'+l[x]+'_'+r).focus();
        }
        else{
            document.getElementById('leter_1_1').focus();
        }
    }
}
*/



//BUTTON
function displayButton(r,display,active){
    if (display==0){
        document.getElementById('button_'+r).style.display = 'none';
    }
    if (display==1){
        document.getElementById('button_'+r).style.display = 'inline'; 
    }
    if (active==0){        
        document.getElementById('button_'+r).disabled = true;
    }
    if (active==1){
        document.getElementById('button_'+r).disabled = false;
    }
}

function displayLetter(l,r,active){
    if (active=0){
        document.getElementById('leter_'+(l+1)+'_'+r).readOnly = true;
    }
}