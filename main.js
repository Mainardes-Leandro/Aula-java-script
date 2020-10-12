function button(){
    document.getElementById("thanks").innerHTML = "<b>Teste<b>";
    //console.log(document.getElementById("thanks"));
    //alert("Você clicou no botão");
}

function redirecionamento(){
    //window.open("http://www.google.com");
    window.location.href = "http://www.google.com";
}

function exchange(elemento){
    //document.getElementById("mousemove").innerHTML = "Mudando o texto";
    elemento.innerHTML = "Mudando o texto";
}

function back(elemento){
    //document.getElementById("mousemove").innerHTML = "Teste";
    elemento.innerHTML = "teste";
}
/*
function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5, 10));
*/

/*
var d = new Date();
alert(d);
alert(d.getMinutes());
*/

/*
var count;
for(count = 0; count <=5; count++){
    console.log(count);
}
*/

/*
var count = 0;
while(count < 5){
    console.log(count);
    count += 1;
}
*/

/*
var idade = prompt("Qual a sua idade?")
if(idade >= 18){
    alert("Maior de idade");
}
else{
    alert("Menor de idade");
}
*/

/*
var frutas = [{nome: "laranja", cor: "laranja"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var frutas = {nome: "maça", cor: "vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log();

//var nome = "Leandro Mainardes";
//var idade = 28;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " " + idade + " anos");
//alert(idade + idade2);
//console.log(frase.toUpperCase());
//console.log(frase.replace("Japão", "Brasil"));