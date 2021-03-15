const apikey = "cdb54b2920ec4ec7a759b97d80230add";

  $(document).ready(function(){
    $.getJSON("moedas.json", function(json){
      for(item in json){
        $("#moeda1").append(`
          <option value="${item}">${item}</option>
        `);        
        $("#moeda2").append(`
        <option value="${item}">${item}</option>
        `);
        $("#direta1").append(`
        <option value="${item}">${item}</option>
        `);
        $("#direta2").append(`
        <option value="${item}">${item}</option>
        `);
        $("#drop1").append(`
        <a class="dropdown-item" value="${item}">${item}</a>
        `)
      }
    })
  });

function calculo(){
  var m1 = document.getElementById("moeda1").value;
  var m2 = document.getElementById("moeda2").value;
  let v1 = document.getElementById("valor1").value;
  $.get("http://data.fixer.io/api/latest?access_key=cdb54b2920ec4ec7a759b97d80230add", function(data){
    var myJSON = JSON.stringify(data);
    console.log(data);
    var meu_json=JSON.parse(myJSON);
    let aux1 = meu_json["rates"][m1];
    let aux2 = meu_json["rates"][m2];
    let aux3 = (v1*aux2/aux1).toFixed(3);
    document.getElementById("answer").innerHTML=""+aux3;
  });
}

function calculo2(){
  let v1 = document.getElementById("valordireto1").value;
  let date = document.getElementById("date-input").value;
  let m1 = document.getElementById("direta1").value;
  let m2 = document.getElementById("direta2").value;
  let URLL = "http://data.fixer.io/api/"+date+"?access_key="+apikey+"&symbols="+m1+","+m2;
  var meu_json;
  $.get(URLL, function(data){
    var myJSON = JSON.stringify(data);
    console.log(data);
    meu_json=JSON.parse(myJSON);
    let c1 = meu_json["rates"][m1];
    let c2 = meu_json["rates"][m2];
    let aux3 = (v1*c2/c1).toFixed(3);
    document.getElementById("answerdireta").innerHTML=""+aux3;
  });
}