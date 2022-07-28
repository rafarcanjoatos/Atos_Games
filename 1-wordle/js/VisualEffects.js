//FOCUS
window.onload = function () {
    document.getElementById("char_1_1").focus();
    displayButton(1,1,0);
}

function focusFirst(row){
    document.getElementById('char_1_'+(row+1)).focus();
}

function nextWord(line,row){
    if((line<6)){
        line+=1;

        if(line==6){
            displayButton(row,1,1);
            document.getElementById('button_'+row).focus();
        }
        else{
            document.getElementById('char_'+line+'_'+row).focus();
            displayLetter(line,row,1);
        }
    }
}

function alwaysFocus(backspace){
    try{
        for (var row=1; row<7; row++){
            for (var line=1; line<6; line++){        
                var char = document.getElementById('char_'+line+'_'+row).value;
                
                if ((char==null)||(char=="")){                            
                    if (backspace==1){           
                        line-=1;
                        document.getElementById('char_'+line+'_'+row).value='';
                    }                          
                    document.getElementById('char_'+line+'_'+row).focus();                 
                    line=6;
                    row=7;         
                }
            }
        }
    }
    catch{
        document.getElementById('char_1_1').focus();
    }
}


//BUTTON
function displayButton(row,display,active){
    if (display==0){
        document.getElementById('button_'+row).style.display = 'none';
    }
    if (display==1){
        document.getElementById('button_'+row).style.display = 'inline'; 
    }
    if (active==0){        
        document.getElementById('button_'+row).disabled = true;
    }
    if (active==1){
        document.getElementById('button_'+row).disabled = false;
    }
}

function displayLetter(line,row,status){
    if (status==0){
        document.getElementById('char_'+(line+1)+'_'+row).readOnly = true;

    }
    if (status==3){
        document.getElementById('char_'+line+'_'+row).disabled = true;
    }
}