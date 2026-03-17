const SomaSerie = {
    calcular: function() {
        Main.iniciarPrograma('SOMA DA SERIE (1 + 11 + 111 + ...)');
        
        const n = parseInt(prompt("Digite a quantidade de termos:"));
        
        if (isNaN(n) || n <= 0) {
            Main.escreverConsole('Por favor, digite um numero valido maior que zero!\n');
            return;
        }
        
        let soma = 0;
        let termo = 0;
        let expressao = "";
        
        for (let i = 1; i <= n; i++) {
            termo = termo * 10 + 1;
            soma += termo;
            
            if (i === 1) {
                expressao += termo;
            } else {
                expressao += " + " + termo;
            }
        }
        
        Main.escreverConsole('Expressao: ' + expressao + '\n');
        
        // Destacar resultado
        const consoleDiv = document.getElementById('console');
        consoleDiv.innerHTML += '<div class="resultado-final">' +
            'A soma e: ' + soma +
            '</div>';
        
        Main.escreverConsole('\n');
    }
};