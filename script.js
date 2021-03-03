const apikey = "cdb54b2920ec4ec7a759b97d80230add";

  function funcion1() {
    $("#testando").hide();
  }

  var meu_json;

  $(document).ready(function(){
    $("#getfromAPI").click(function(){
      $.get("http://data.fixer.io/api/latest?access_key=cdb54b2920ec4ec7a759b97d80230add", function(data){
        var myJSON = JSON.stringify(data);
        console.log(data);
        meu_json=JSON.parse(myJSON);

      });
    });
  });


function calculo(){
  var m1 = document.getElementById("moeda1").value;
  var m2 = document.getElementById("moeda2").value;
  let v1 = document.getElementById("valor1").value;
  let aux1 = meu_json["rates"][m1];
  let aux2 = meu_json["rates"][m2];
  let aux3 = (v1*aux2/aux1).toFixed(3);
  document.getElementById("answer").innerHTML=""+aux3;
}

