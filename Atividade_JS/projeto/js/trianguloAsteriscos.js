const TrianguloAsteriscos = {
    desenhar: function() {
        Main.iniciarPrograma('TRIANGULO DE ASTERISCOS');
        
        const linhas = parseInt(prompt("Digite o numero de linhas do triangulo:"));
        
        if (isNaN(linhas) || linhas <= 0) {
            Main.escreverConsole('Por favor, digite um numero valido maior que zero!\n');
            return;
        }
    
        Main.escreverConsole('Triangulo com ' + linhas + ' linhas:\n');
        Main.escreverConsole('=================\n');
        
        const consoleDiv = document.getElementById('console');
        for (let i = 1; i <= linhas; i++) {
            let linha = "";
            for (let j = 1; j <= i; j++) {
                linha += "*";
            }
            consoleDiv.innerHTML += '<div class="tentativa-atual">' + linha + '</div>';
        }
        
        Main.escreverConsole('\n');
    }
};