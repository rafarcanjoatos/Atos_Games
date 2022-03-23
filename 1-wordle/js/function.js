function validateWord() {
    // pegando o valor do nome pelos names
    var leter0 = document.getElementById("leter0");
    var leter1 = document.getElementById("leter1");
    var leter2 = document.getElementById("leter2");
    var leter3 = document.getElementById("leter3");
    var leter4 = document.getElementById("leter4");
    
    var letersOfDay = <?=$json_letersOfDay?>;
    //isso é um objeto json, então para acessar os valores trate ele como objeto:
    alert('Palavra do Dia: ' + letersOfDay);

    
    /*
    // verificar se o nome está vazio
    if (leter0.value == "") {
      alert("Nome não informado");
  
      // Deixa o input com o focus
      nome.focus();
      // retorna a função e não olha as outras linhas
      return;
    }*/
  }