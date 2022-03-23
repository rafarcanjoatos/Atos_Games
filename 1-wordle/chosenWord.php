<?php

require_once ('function.php');
//Choose Word of Day
function chosenWord(){
    $servidor = '92.249.45.53';
    $banco = 'atosmidi_games';
    $usuario = 'atosmidi';
    $senha = 'R4f43l0!';
    $connect = mysqli_connect($servidor, $usuario, $senha, $banco);
    if (!$connect) {
        die("Connection failed: " . mysqli_connect_error());
    }
    
    //import word of database
    $sql = "SELECT * FROM wordle_banco_de_palavras WHERE palavra_utilizada = 0 ORDER BY RAND() LIMIT 1";
    $result = mysqli_query($connect, $sql);

    if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) { 
            $idChosen = $row["id"];
            $chosenWord = $row["palavras"];
            logMe("---- PALAVRA ESCOLHIDA: ".$chosenWord." -> OK ----", 'success');
        }
    
        //mark as used
        $sql2 = "UPDATE wordle_banco_de_palavras SET palavra_utilizada = 1 WHERE id = ".$idChosen;
        if (mysqli_query($connect, $sql2)) {
            logMe("---- PALAVRA MARCADA COMO UTILIZADA -> OK ----", 'success');

                //update word of day
                $sql3 = "INSERT INTO wordle_palavra_do_dia (palavra_do_dia) VALUES ('".$chosenWord."')";
                if (mysqli_query($connect, $sql3)) {
                    logMe("---- INSERT DA PALAVRA DO DIA -> OK ----", 'success');
                } else { logMe("---- FALHA INSERT - INSERIR PALAVRA ESCOLHIDA NA PALAVRA DO DIA ----", 'error');}
        } else { logMe("---- FALHA UPDATE - MARCAR PALAVRA COMO UTILIZADA = 1 ----", 'error');}
    } else { logMe("---- FALHA SELECT - BUSCAR PALAVRA DO BANCO DE PALAVRAS ----", 'error' );}
    
    logMe("--------------------------------", 'success' );
    mysqli_close($connect);
}

//star function
echo chosenWord();

?>