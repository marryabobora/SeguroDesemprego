/* Calcular seguro desemprego

Salário: 

solicitar : ultimo, penultimo e antepenultimo salario

fazer a media da soma de todos salarios (somar e dividir por 3)

  se a média é abaixo de R$1599,61 > multiplicar por 0,8

  se a média é entre R$1599,62 e R$2.666,29 > o que excede à R$1599,62 deve ser multiplicado por 0.5 e somado à R$1279.69

  Se for mais que R$2.666,29 o valor é R$1.813,03

  Se é menor de R$ 1.039 o segurado deve receber R$ 1.039
 
Quantidade de tempo

    Se é a primeira solicitação
          se trabalhou 12 meses na empresa > possui direito a 4 parcelas 

          Se trabalhou mais de 23 meses > possui direito a 5 parcelas 

          Se não trabalhou doze meses, não tem direito. (display mensagem: Infelizmente, você não tem direito ao seguro desemprego.)

    Se é a segunda solicitação

          Se trabalhou entre 9 meses e 11 meses nos ultimos 12 meses > Receber 3 parcelas 
          
          Se trabalhou entre 12 e 23 meses > Receber 4 parcelas do seguro desemprego

          Se trabalhou mais de 24 meses > Receber 5 parcelas

          Se trabalhou menos de 9 meses > não possui direito

    Se é a terceira solicitação

           Se trabalhou entre 6 meses e 11 meses> Receber 3 parcelas 
          
          Se trabalhou entre 12 e 23 meses > Receber 4 parcelas do seguro desemprego

          Se trabalhou mais de 24 meses > Receber 5 parcelas

          Se trabalhou menos de 6 meses > não possui direito
*/

(function() {
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('form').addEventListener('submit', function (e) {
            e.preventDefault();
        })
    });
})();



function calcularPromedio(ultimoSalario, penultimoSalario, antepenultimoSalario) {

  var somaDeSalarios = (parseFloat(ultimoSalario) + parseFloat(antepenultimoSalario) + parseFloat(penultimoSalario));
  var divisaodeSalarios = (somaDeSalarios / 3);
  
  return divisaodeSalarios;
} 


function compararPromedio (promedioDeSalario){

    var salarioMinimo = 1045;

  if (promedioDeSalario < 1599.61) {
  var valorAbaixo = promedioDeSalario * 0.8;
  console.log (valorAbaixo);
  document.getElementById("resultadovalor").innerHTML = "R$" + valorAbaixo.toFixed(2);   /* valor */ 

    if (valorAbaixo <= salarioMinimo) {
      valorAbaixo = 1045;
      console.log (valorAbaixo);
      console.log(promedioDeSalario);
      document.getElementById("resultadovalor").innerHTML = "R$" + valorAbaixo.toFixed(2);   /* valor */ 
    }
    
  }

  if (promedioDeSalario > 1599.62 && promedioDeSalario < 2666.29){
    var excesso = 1599.62 - promedioDeSalario;
    var valorMedio = Math.abs(excesso * 0.5) + 1279.69;
    console.log(valorMedio);
    document.getElementById("resultadovalor").innerHTML = "R$" + valorMedio.toFixed(2);   /* valor */ 
  }

  if (promedioDeSalario > 2666.29){
    var valorAlto = 1813.03;
    console.log(valorAlto);
    document.getElementById("resultadovalor").innerHTML = "R$" + valorAlto.toFixed(2);   /* valor */ 
  }
 
}

function primeiraSolicitacao(mesesDeTrabalho){
   var resultado;
    document.getElementById("resultadovalor").style.visibility = "visible";
    document.getElementById("textoparcelas").style.visibility = "visible";

    if (mesesDeTrabalho <= 22 && mesesDeTrabalho >= 12) {
        resultado = "Tem direito a 4 parcelas";
        console.log("4 parcelas");
        document.getElementById("resultadoparcelas").innerHTML = "4 parcelas";
    }
    if (mesesDeTrabalho >= 23) {
        resultado = "Tem direito a 5 parcelas";
        console.log("5 parcelas");
        document.getElementById("resultadoparcelas").innerHTML = "5 parcelas";
    }
    if (mesesDeTrabalho < 12) {
        resultado = "Infelizmente, você não tem direito ao seguro desemprego.";
        document.getElementById("resultadoparcelas").innerHTML = "Infelizmente, você não tem direito ao seguro desemprego.";
        document.getElementById("resultadovalor").style.visibility = "hidden";
        document.getElementById("textoparcelas").style.visibility = "hidden";
    }
    console.log(resultado);
    return resultado;
}

function segundaSolicitacao(mesesDeTrabalho){
    var resultado;
    document.getElementById("resultadovalor").style.visibility = "visible";
    document.getElementById("textoparcelas").style.visibility = "visible";
     if (mesesDeTrabalho >= 9 && mesesDeTrabalho <= 11) {
         resultado = "Tem direito a 3 parcelas";
         console.log("3 parcelas");
         document.getElementById("resultadoparcelas").innerHTML = "3 parcelas";
     }
     if (mesesDeTrabalho >= 12 && mesesDeTrabalho <= 23)  {
         resultado = "Tem direito a 4 parcelas";
         console.log("4 parcelas");
         document.getElementById("resultadoparcelas").innerHTML = "4 parcelas";
     }
     if (mesesDeTrabalho >= 24){
        resultado = "Tem direito a 5 parcelas";
        console.log("5 parcelas");
        document.getElementById("resultadoparcelas").innerHTML = "5 parcelas";
    }
     if (mesesDeTrabalho < 9){
         resultado = "Infelizmente, você não tem direito ao seguro desemprego.";
         document.getElementById("resultadoparcelas").innerHTML = "Infelizmente, você não tem direito ao seguro desemprego.";
         document.getElementById("resultadovalor").style.visibility = "hidden";
         document.getElementById("textoparcelas").style.visibility = "hidden";
     }
     console.log(resultado);
     return resultado;
 }

 function terceiraSolicitacao(mesesDeTrabalho){
    var resultado;
    document.getElementById("resultadovalor").style.visibility = "visible";
    document.getElementById("textoparcelas").style.visibility = "visible";
     if (mesesDeTrabalho >= 6 && mesesDeTrabalho <= 11) {
         resultado = "Tem direito a 3 parcelas";
         document.getElementById("resultadoparcelas").innerHTML = "3 parcelas";
     }
     if (mesesDeTrabalho >= 12 && mesesDeTrabalho <= 23)  {
         resultado = "Tem direito a 4 parcelas";
         document.getElementById("resultadoparcelas").innerHTML = "4 parcelas";
     }
     if (mesesDeTrabalho >= 24)  {
        resultado = "Tem direito a 5 parcelas";
        document.getElementById("resultadoparcelas").innerHTML = "5 parcelas";
    }
     if (mesesDeTrabalho < 6) {
         resultado = "Infelizmente, você não tem direito ao seguro desemprego.";
         document.getElementById("resultadoparcelas").innerHTML = "Infelizmente, você não tem direito ao seguro desemprego.";
         document.getElementById("resultadovalor").style.visibility = "hidden";
         document.getElementById("textoparcelas").style.visibility = "hidden";
     }
     console.log(resultado);
     return resultado;
 }

function calcular () {

    
    var valorAntepenultimo = document.getElementById("idantepenultimo");
    var valorPenultimo = document.getElementById("idpenultimo");
    var valorUltimo = document.getElementById("idultimo");
    var valorMeses = document.getElementById("idquantosmeses");
 
    const salarioMinimo = 1045;
    var promedio = calcularPromedio(valorAntepenultimo.value,valorPenultimo.value,valorUltimo.value);
    //var promedio = calcularPromedio(1200,1200,1200);
    var resultado = compararPromedio(promedio);
    var mesesDeTrabalho = valorMeses.value;

    var opcaoSelecionada = 3;
     
    if (document.getElementById("r0").checked)
        opcaoSelecionada = 0;
    else if (document.getElementById("r1").checked)
        opcaoSelecionada = 1;
    else if (document.getElementById("r2").checked)
        opcaoSelecionada = 2;


    switch (opcaoSelecionada) {
        case 0: primeiraSolicitacao(mesesDeTrabalho);
            break;
        case 1: segundaSolicitacao(mesesDeTrabalho);
            break;
        case 2: terceiraSolicitacao(mesesDeTrabalho);
            break;
    }

    console.log(resultado)

    
    



    }






