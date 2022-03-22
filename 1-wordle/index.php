<html lang="en">
<head>
    <title>Wordle</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="wordle.css" media="screen" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@600&display=swap" rel="stylesheet">

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/22471e2f1a.js" crossorigin="anonymous"></script>
    <script type="text/javascript" src="code.js"></script>
</head>
<body>

<?php
require_once('wordle_header.html');
require_once('select.php');

//start content
$letersOfDay = importWord();
$numLeters = count($letersOfDay);

echo '<div class="row justify-content-center text-center">';
echo '<div class="col-10">';
for($x=0; $x<6; $x++){    
        echo '<div class="row justify-content-center text-center" style="height: 50px;">';
            for( $i=0; $i < $numLeters; $i++ ){
                echo '<div class="col-1 p-2 m-2 border border-dark">';
                    echo '<input type="text" maxlength="1" id="leter'.$i.'" class="text-center border-0 form-control text-uppercase"></input>';
                echo '</div>';
            }
        echo '</div>';
    echo '<br>';
}
echo '</div>';
echo '</div>';

?>


<?php
//end content

require_once('wordle_footer.html');
?>

</body>
</html>