const JogoAdivinhacao = {
    jogar: function() {
        Main.iniciarPrograma('JOGO DE ADIVINHACAO');
        
        const numeroSecreto = Math.floor(Math.random() * 20) + 1;
        let tentativa;
        let acertou = false;
        let tentativas = 0;
        
        Main.escreverConsole('Tente adivinhar o numero secreto entre 1 e 20!\n');
        Main.escreverConsole('----------------------------------------\n');
        
        while (!acertou) {
            tentativa = parseInt(prompt("Digite seu palpite (1-20):"));
            tentativas++;
            
            if (isNaN(tentativa) || tentativa < 1 || tentativa > 20) {
                Main.escreverConsole('Por favor, digite um numero valido entre 1 e 20!\n');
                continue;
            }
            
            if (tentativa === numeroSecreto) {
                Main.escreverAcerto(tentativas);
                acertou = true;
            } else if (tentativa < numeroSecreto) {
                Main.escreverDica(tentativa, 'MAIOR');
            } else {
                Main.escreverDica(tentativa, 'MENOR');
            }
        }
        
        Main.escreverConsole('\n');
    }
};