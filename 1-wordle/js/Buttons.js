function enableButton(x,buttonSubmit){
    if(x==1){
        buttonSubmit.disabled = false;
    }else{        
        buttonSubmit.disabled = true;
    }
}

function displayLetter(round,i,status){
    if (status==0){
        var x = document.getElementById('char-'+round+'-'+(i+1));
        x.readOnly = true;
    }
    if (status==3){
        var y = document.getElementById('char-'+round+'-'+(i+1));
        y.disabled = true;
    }
}
//