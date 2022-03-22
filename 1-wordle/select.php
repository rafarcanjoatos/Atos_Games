<?php
//Open Log
function logMe( $msg, $level = 'info', $file = 'main.log'){
    // variável que vai armazenar o nível do log (INFO, WARNING ou ERROR)
    $levelStr = '';
 
    // verifica o nível do log
    switch ( $level )
    {
        case 'info':
            // nível de informação
            $levelStr = 'INFO';
            break;
        case 'success':
            // nível de informação
            $levelStr = 'SUCCESS';
            break; 
        case 'warning':
            // nível de aviso
            $levelStr = 'WARNING';
            break; 
        case 'error':
            // nível de erro
            $levelStr = 'ERROR';
            break;
    }
 
    // data atual
    $date = date( 'Y-m-d H:i:s' );
 
    // formata a mensagem do log
    // 1o: data atual
    // 2o: nível da mensagem (INFO, WARNING ou ERROR)
    // 3o: a mensagem propriamente dita
    // 4o: uma quebra de linha
    $msg = sprintf( "[%s] [%s]: %s%s", $date, $levelStr, $msg, PHP_EOL );
 
    // escreve o log no arquivo
    // é necessário usar FILE_APPEND para que a mensagem seja escrita no final do arquivo, preservando o conteúdo antigo do arquivo
    file_put_contents( $file, $msg, FILE_APPEND );
}

function importWord(){
    $servidor = '92.249.45.53';
    $banco = 'atosmidi_games';
    $usuario = 'atosmidi';
    $senha = 'R4f43l0!';
    $connect = mysqli_connect($servidor, $usuario, $senha, $banco);
    if (!$connect) {
        die("Connection failed: " . mysqli_connect_error());
    }

    //import word of database
    $sql = "SELECT palavra_do_dia FROM wordle_palavra_do_dia where data_palavra_dia = CURRENT_DATE";
    $result = mysqli_query($connect, $sql);

    if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) { 
            $wordOfDay = $row["palavra_do_dia"];
        }
        logMe("PALAVRA DO DIA -> OK", 'success');

    } else { logMe("FALHA EM BUSCAR PALAVRA DO DIA", 'error');}
    mysqli_close($connect);

    $letersOfDay=str_split($wordOfDay);

    return $letersOfDay;
}
?>