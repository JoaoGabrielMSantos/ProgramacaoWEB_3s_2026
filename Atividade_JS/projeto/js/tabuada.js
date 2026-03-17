const Tabuada = {
    calcular: function() {
        Main.iniciarPrograma('TABUADA');
        
        const numero = parseInt(prompt("Digite um numero para ver sua tabuada:"));
        
        if (isNaN(numero)) {
            Main.escreverConsole('Por favor, digite um numero valido!\n');
            return;
        }
        
        Main.escreverConsole('Tabuada do ' + numero + ':\n');
        Main.escreverConsole('=================\n');
        
        // Criar tabela formatada
        const consoleDiv = document.getElementById('console');
        for (let i = 1; i <= 10; i++) {
            const resultado = numero * i;
            consoleDiv.innerHTML += '<div class="tentativa-atual">' +
                numero + ' x ' + i + ' = ' + resultado +
                '</div>';
        }
        
        Main.escreverConsole('\n');
    }
};