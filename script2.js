/* Funções
function davi(a, b){
console.log (a+b);
}
davi(1,2);

// Chamando funções utilizando return
function d3(a,b){
return a-b;
}
var s = d3(5,3);
console.log(s);

function d4(a,b){
return a*b;
}

console.log(d4(5,5));
*/

// Usando onclick
 function msg(nome){
alert("Não clique em mim"+nome );
 }

// Usando mouseover
function mensagem(nomee){
alert("não aproxime o mouse do botão" + nomee);

}

// Usando DOM
function alteracor1(cor){
    var elemento = document.getElementById("mensagem_span");
    elemento.style.backgroundColor = cor;
}

// Validação Simples com form
function valida(){
    var nome = document.getElementById('nome');
   if(nome.value == ""){
    alert("Informe seu nome")
   }
   else{
       alert("Enviado com sucesso");
   }

}