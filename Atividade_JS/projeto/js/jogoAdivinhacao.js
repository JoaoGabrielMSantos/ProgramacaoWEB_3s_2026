let numeroSecreto = Math.floor(Math.random() * 20) + 1;
let palpite = 0;

while (palpite != numeroSecreto) {
    palpite = Number(prompt("Adivinhe o número entre 1 e 20:"));

    if (palpite > numeroSecreto) {
        console.log("O número secreto é menor!");
    } 
    else if (palpite < numeroSecreto) {
        console.log("O número secreto é maior!");
    } 
    else {
        console.log("Parabéns! Você acertou!");
    }
}