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

function alwaysFocus(l,r){
    try{
        for (var r=1; r<7; r++){
            for (var l=1; l<6; l++){        
                var leter = document.getElementById('leter_'+l+'_'+r).value;
                
                console.log(leter);
                if ((leter==null)||(leter=="")){                    
                    document.getElementById('leter_'+l+'_'+r).focus();
                    l=6;
                    r=7
                }
            }
        }
    }
    catch{
        document.getElementById('leter_1_1').focus();
    }
}


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