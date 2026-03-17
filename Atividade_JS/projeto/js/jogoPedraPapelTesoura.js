const JogoPedraPapelTesoura = {
    jogar: function() {
        Main.iniciarPrograma('PEDRA, PAPEL OU TESOURA');
        
        const opcoes = ["pedra", "papel", "tesoura"];
        
        let escolhaUsuario = prompt("Escolha: pedra, papel ou tesoura").toLowerCase();
        
        while (!opcoes.includes(escolhaUsuario)) {
            escolhaUsuario = prompt("Opcao invalida! Escolha: pedra, papel ou tesoura").toLowerCase();
        }
        
        const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
        
        Main.escreverConsole('Voce escolheu: ' + escolhaUsuario + '\n');
        Main.escreverConsole('Computador escolheu: ' + escolhaComputador + '\n');
        
        let resultado = '';
        if (escolhaUsuario === escolhaComputador) {
            resultado = 'EMPATE!';
            Main.escreverConsole('Resultado: ' + resultado + '\n', false, 'normal');
        } else if (
            (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
            (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
            (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
        ) {
            resultado = 'VOCE VENCEU!';
            Main.escreverConsole('Resultado: ' + resultado + '\n', false, 'acerto');
        } else {
            resultado = 'COMPUTADOR VENCEU!';
            Main.escreverConsole('Resultado: ' + resultado + '\n', false, 'normal');
        }
        
        // Destacar resultado
        const consoleDiv = document.getElementById('console');
        consoleDiv.innerHTML += '<div class="resultado-final">' + resultado + '</div>';
        
        Main.escreverConsole('\n');
    }
};