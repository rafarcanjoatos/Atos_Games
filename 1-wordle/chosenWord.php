<?php

require_once ('controller.php');
//Choose Word of Day
function chosenWord(){
    $server = '92.249.45.53';
    $bd = 'atosmidi_games';
    $user = 'atosmidi';
    $password = 'R4f43l0!';
    $connect = mysqli_connect($server, $user, $password, $bd);
    if (!$connect) {
        die("Connection failed: " . mysqli_connect_error());
    }
    
    //import word of database
    $sql = "SELECT * FROM wordle_banco_de_palavras WHERE palavra_utilizada = 0 ORDER BY RAND() LIMIT 1";
    $result = mysqli_query($connect, $sql);

        //defining variables
        if (mysqli_num_rows($result) > 0) {
            while($row = mysqli_fetch_assoc($result)) { 
                $idChosenWord = $row["id"];
                $chosenWord = $row["palavras"];
                logMe("---- PALAVRA ESCOLHIDA: ".$chosenWord." -> OK ----", 'success');
            }    
            markUsed($connect, $idChosenWord, $chosenWord);
        } else { logMe("---- FALHA SELECT - BUSCAR PALAVRA DO BANCO DE PALAVRAS ----", 'error' );}
    
    logMe("--------------------------------", 'success' );
    mysqli_close($connect);
}

//mark as used
function markUsed($connect, $idChosenWord, $chosenWord){
    $sql = "UPDATE wordle_banco_de_palavras SET palavra_utilizada = 1 WHERE id = ".$idChosenWord;
    if (mysqli_query($connect, $sql)) {
        logMe("---- PALAVRA MARCADA COMO UTILIZADA -> OK ----", 'success');
        updateWord($connect,$chosenWord);
                        
    } else { logMe("---- FALHA UPDATE - MARCAR PALAVRA COMO UTILIZADA = 1 ----", 'error');}
}

//update word of day
function updateWord($connect,$chosenWord){
    $sql3 = "INSERT INTO wordle_palavra_do_dia (palavra_do_dia) VALUES ('".$chosenWord."')";
    if (mysqli_query($connect, $sql3)) {
        logMe("---- INSERT DA PALAVRA DO DIA -> OK ----", 'success');
    } else { logMe("---- FALHA INSERT - INSERIR PALAVRA ESCOLHIDA NA PALAVRA DO DIA ----", 'error');}
}

echo chosenWord();
?>