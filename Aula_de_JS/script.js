console.log('Teste em JS');

var animal = "gato";
console.log(animal);

let nomeCompleto = 'Fulano da silva';
console.log(nomeCompleto);

var valor1;
const valor0 = 10; //const nao permite reatribuição
console.log(valor0);

valor1 = 12;
valor1 = 15; //var permite reatribuição

//verificação de tipos
console.log(typeof valor1);

// algoritmo: entrada + processamento + saida
var nome = window.prompt("Nome: ");
console.log(nome)//template literal
console.log("Seja bem-vindo," + nome + ", Aproveite!");
console.log(`Seja bem-vindo ${nome}, Aproveite!`);
document.writeln(`Seja bem-vindo ${nome}, Aproveite!`);

console.log(5 == "5")// compara os valores e retorna true caso sejam iguais
console.log(5 === "5");// nesse caso, compara os tipos

//atividade: criar um algortmo que some 2 numeros dados pelo usuário e apresente o resultado.

let n1 = window.prompt("digite o primeiro numero: ")

let n2 = window.prompt("digite o segundo numero: ")

let soma = parseFloat(n1) + parseFloat(n2);
document.writeln(`Sua soma deu ${soma}`);

//estruturas condicionais: if-else, switch-cases
var idade = 10;

if (idade >= 18) {
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}

var hora = 10

if (hora <12){
    console.log("Bom dia!")
}else if (hora <18){
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}

var diaDaSemana = 2;

switch(diaDaSemana){
    case 1:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda");    
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sabado");
        break;
    default:
        console.log("Esse dia não existe!");
        break;        
}

//estruturas de repetição:foe e while

for (let i = 0; i < 5; i++){
    console.log("interação FOR: " + i);
}

var i = 0
while( i < 5 ){
    console.log("interação WHILE: " + i)
    i++;
}

