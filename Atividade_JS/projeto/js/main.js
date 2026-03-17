const Main = {

    escreverConsole: function(texto, limpar = false, tipo = 'normal') {
        const consoleDiv = document.getElementById('console');
        if (limpar) {
            consoleDiv.innerHTML = '';
        }
        
        let classe = '';
        switch(tipo) {
            case 'acerto':
                classe = 'dica-acerto';
                break;
            case 'maior':
                classe = 'dica-maior';
                break;
            case 'menor':
                classe = 'dica-menor';
                break;
            case 'titulo':
                classe = 'info-titulo';
                break;
            default:
                classe = '';
        }
        
        const linhas = texto.split('\n');
        linhas.forEach(linha => {
            if (linha.trim() !== '') {
                if (classe) {
                    consoleDiv.innerHTML += '<div class="' + classe + '">' + linha + '</div>';
                } else {
                    consoleDiv.innerHTML += linha + '<br>';
                }
            }
        });
        

        consoleDiv.scrollTop = consoleDiv.scrollHeight;
    },
    
    escreverDica: function(numero, dica) {
        const consoleDiv = document.getElementById('console');
        const classe = dica === 'MAIOR' ? 'dica-maior' : 'dica-menor';
        
        consoleDiv.innerHTML += '<div class="tentativa-atual">' +
            '<span class="numero-digitado">Palpite: ' + numero + '</span><br>' +
            '<span class="' + classe + '">O número secreto é ' + dica + '!</span>' +
            '</div>';
        
        consoleDiv.scrollTop = consoleDiv.scrollHeight;
    },
    
    escreverAcerto: function(tentativas) {
        const consoleDiv = document.getElementById('console');
        consoleDiv.innerHTML += '<div class="resultado-final">' +
            'PARABÉNS! Você acertou em ' + tentativas + ' tentativa(s)!' +
            '</div>';
        consoleDiv.scrollTop = consoleDiv.scrollHeight;
    },
    
    iniciarPrograma: function(titulo) {
        const consoleDiv = document.getElementById('console');
        consoleDiv.innerHTML += '<div class="separador"><span>' + titulo + '</span></div>';
        consoleDiv.innerHTML += '<div class="info-programa">' +
            '<div class="info-titulo">' + titulo + '</div>' +
            '</div>';
        consoleDiv.scrollTop = consoleDiv.scrollHeight;
    },
    
    
    adicionarSeparador: function() {
        const consoleDiv = document.getElementById('console');
        consoleDiv.innerHTML += '<div class="separador"><span>✦</span></div>';
    },
    
    
    limparConsole: function() {
        document.getElementById('console').innerHTML = 'Console limpo. Clique em um botão para começar...';
    },
    
    voltarTopo: function() {
        const consoleDiv = document.getElementById('console');
        consoleDiv.scrollTop = 0;
    },
};


const originalConsoleLog = console.log;
console.log = function(...args) {
    originalConsoleLog.apply(console, args);
    Main.escreverConsole(args.join(' ') + '\n');
};