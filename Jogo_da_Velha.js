// Faça um "jogo da velha" criando uma matriz em duas dimensões (Você deve criar um array com 3 arrays 
// de 3 elementos cada dentro). O programa deve pedir as coordenadas (linha e coluna) alternadamente 
// para 2 jogares e marcar X ou O em cada caso. Caso um jogador vença, ele deve perguntar se desejam jogar 
// mais uma vez, e registrar quem venceu aquela rodada, se os jogadores desejarem parar, 
// o programa deve mostrar quem ganhou mais rodadas e quem é o grande vencedor.

const prompt = require('prompt-sync')();

console.log('JOGO DA VELHA');
console.log();

const tabuleiro = [[0, 'A', 'B', 'C'], [1,'_' ,'_' ,'_' ], [2,'_' ,'_' ,'_' ], [3,'_' ,'_' ,'_' ]];

function tabuleiro1(){  
    console.clear();
    console.log(tabuleiro[0]);
    console.log();
    console.log(tabuleiro[1]);
    console.log();
    console.log(tabuleiro[2]);
    console.log();
    console.log(tabuleiro[3]);
}

let jogador1 = prompt('Escolha entre "X" ou "O":').toLowerCase();
let jogador2 = ''

if (jogador1 == 'x'){
    jogador2 = 'o';
    console.log('O jogador 1 escolheu "X", o jogador 2 jogará com "O"');
}else{
    jogador2 = 'x';
    console.log('O jogador 1 jogará com "O"');
}

console.log();

function jogadaX(linha, coluna){
    if (linha == 1 && coluna == 'a'){
        tabuleiro[1].splice(1, 1, 'X');        
    }else if (linha == 1 && coluna == 'b'){
        tabuleiro[1].splice(2, 1, 'X');
    }else if (linha == 1 && coluna == 'c'){
        tabuleiro[1].splice(3, 1, 'X');
    }else if (linha == 2 && coluna =='a'){
        tabuleiro[2].splice(1, 1, 'X');
    }else if (linha == 2 && coluna == 'b'){
        tabuleiro[2].splice(2, 1, 'X');
    }else if (linha == 2 && coluna == 'c'){
        tabuleiro[2].splice(3, 1, 'X');
    }else if (linha == 3 && coluna == 'a'){
        tabuleiro[3].splice(1, 1, 'X');
    }else if (linha == 3 && coluna == 'b'){
        tabuleiro[3].splice(2, 1, 'X');
    }else if (linha == 3 && coluna == 'c'){
        tabuleiro[3].splice(3, 1, 'X');
    }
}

function jogadaO(linha, coluna){
    if (linha == 1 && coluna == 'a'){
        tabuleiro[1].splice(1, 1, 'O');        
    }else if (linha == 1 && coluna == 'b'){
        tabuleiro[1].splice(2, 1, 'O');
    }else if (linha == 1 && coluna == 'c'){
        tabuleiro[1].splice(3, 1, 'O');
    }else if (linha == 2 && coluna =='a'){
        tabuleiro[2].splice(1, 1, 'O');
    }else if (linha == 2 && coluna == 'b'){
        tabuleiro[2].splice(2, 1, 'O');
    }else if (linha == 2 && coluna == 'c'){
        tabuleiro[2].splice(3, 1, 'O');
    }else if (linha == 3 && coluna == 'a'){
        tabuleiro[3].splice(1, 1, 'O');
    }else if (linha == 3 && coluna == 'b'){
        tabuleiro[3].splice(2, 1, 'O');
    }else if (linha == 3 && coluna == 'c'){
        tabuleiro[3].splice(3, 1, 'O');
    }
}

function verificar(linha, coluna){
    if (linha == 1 && coluna == 'a'){
        if (tabuleiro[1][1] == '_'){
            return true;
        }else{
            return false;
        }
    }else if (linha == 1 && coluna == 'b'){
        if (tabuleiro[1][2] == '_'){
            return true;
        }else{
            return false;
        }
    }else if (linha == 1 && coluna == 'c'){
        if (tabuleiro[1][3] == '_'){
            return true;
        }else{
            return false;
}
    }else if (linha == 2 && coluna == 'a'){
        if (tabuleiro[2][1] == '_'){
            return true;
        }else{
            return false;
        }
    }else if (linha == 2 && coluna == 'b'){
        if (tabuleiro[2][2] == '_'){
            return true;
        }else{
            return false;
        }
    }else if (linha == 2 && coluna == 'c'){
        if (tabuleiro[2][3] == '_'){
            return true;
        }else{
            return false;
}
    }else if (linha == 3 && coluna == 'a'){
        if (tabuleiro[3][1] == '_'){
            return true;
        }else{
            return false;
        }
    }else if (linha == 3 && coluna == 'b'){
        if (tabuleiro[3][2] == '_'){
            return true;
        }else{
            return false;
        }
    }else if (linha == 3 && coluna == 'c'){
        if (tabuleiro[3][3] == '_'){
            return true;
        }else{
            return false;
}
    }
}

function ganhador(){
    if (tabuleiro[1][1] == 'X' && tabuleiro[1][2] == 'X' && tabuleiro[1][3] == 'X'){ 
        return true;
    }else if (tabuleiro[2][1] == 'X' && tabuleiro[2][2] == 'X' && tabuleiro[2][3] == 'X'){
        return true;
    }else if (tabuleiro[3][1] == 'X' && tabuleiro[3][2] == 'X' && tabuleiro[3][3] == 'X'){
        return true;
    }else if (tabuleiro[1][1] == 'O' && tabuleiro[1][2] == 'O' && tabuleiro[1][3] == 'O'){
        return true;
    }else if (tabuleiro[2][1] == 'O' && tabuleiro[2][2] == 'O' && tabuleiro[2][3] == 'O'){
        return true;
    }else if (tabuleiro[3][1] == 'O' && tabuleiro[3][2] == 'O' && tabuleiro[3][3] == 'O'){
        return true;
    }else if (tabuleiro[1][1] == 'X' && tabuleiro[2][1] == 'X' && tabuleiro[3][1] == 'X'){
        return true;
    }else if (tabuleiro[1][2] == 'X' && tabuleiro[2][2] == 'X' && tabuleiro[3][2] == 'X'){
        return true;
    }else if (tabuleiro[1][3] == 'X' && tabuleiro[2][3] == 'X' && tabuleiro[3][3] == 'X'){
        return true;
    }else if (tabuleiro[1][1] == 'O' && tabuleiro[2][1] == 'O' && tabuleiro[3][1] == 'O'){
        return true;
    }else if (tabuleiro[1][2] == 'O' && tabuleiro[2][2] == 'O' && tabuleiro[3][3] == 'O'){
        return true;
    }else if (tabuleiro[1][3] == 'O' && tabuleiro[2][3] == 'O' && tabuleiro[3][3] == 'O'){
        return true;
    }else if (tabuleiro[1][1] == 'X' && tabuleiro[2][2] == 'X' && tabuleiro[3][3] == 'X'){
        return true;
    }else if (tabuleiro[3][1] == 'X' && tabuleiro[2][2] == 'X' && tabuleiro[1][3] == 'X'){
        return true;
    }else if (tabuleiro[1][1] == 'O' && tabuleiro[2][2] == 'O' && tabuleiro[3][3] == 'O'){
        return true;
    }else if (tabuleiro[3][1] == 'O' && tabuleiro[2][2] == 'O' && tabuleiro[1][3] == 'O'){
        return true;
    }else{
        return false;
    }
}

function empate(){
    let count = 0;
    for (let i = 1; i <= 3; i++){
        for (let t = 1; t <= 3; t++){
            if (tabuleiro[i][t] == '_'){  // verifica se os itens da lista estão vazios
                count++
            }
        }
    }
    if (count > 0){
        return true;
    }else{
        return false;
    }
}

function novoTab(){
    for (let i = 1; i <= 3; i++){
        for (let u = 1; u <= 3; u++){
           tabuleiro[i].splice(u, 1, '_');  // limpa o tabuleiro
        }
    }
    return tabuleiro
}

let jogadas = 0;
let countPartidas = 0;
let winJog1 = 0;
let winJog2 = 0;

function grandeVencedor(winJog1, winJog2){
    if (winJog1 == winJog2){
        console.log(`As partidas empataram! Jogador 1 venceu ${winJog1} partida(s) e Jogador 2 venceu ${winJog2} partida(s).`);
    }else if (winJog1 > winJog2){
        console.log(`O jogador 1 é o grande vencedor com ${winJog1} partidas ganhas.`);
    }else if (winJog1 < winJog2){
        console.log(`O jogador 2 é o grande vencedor com ${winJog2} partidas ganhas.`);
    }
}

while (true){
    
    tabuleiro1();
    jogadas++;    
    
    if (jogadas % 2 != 0){
        let jogada1Linha = +prompt('Jogador 1 | Escolha a linha que quer jogar [1] [2] [3]: ');
                   
        while (jogada1Linha != 1 && jogada1Linha != 2 && jogada1Linha != 3){
            console.log('Jogada inválida!')
            jogada1Linha = +prompt('Jogador 1 | Escolha a linha que quer jogar [1] [2] [3]: ');
        }
        
        let jogada1Coluna = prompt('Escolha a coluna que quer jogar [A] [B] [C]: ').toLowerCase();
               
        while (jogada1Coluna != 'a' && jogada1Coluna != 'b' && jogada1Coluna != 'c'){
            console.log('Jogada inválida!')
            jogada1Coluna = prompt('Jogador 1 | Escolha a coluna que quer jogar [A] [B] [C]: ');
        }
        
        let verificacao = verificar(jogada1Linha, jogada1Coluna);
        
        while (verificacao == false){
            console.log('Este espaço está ocupado!');
            console.log();
            jogada1Linha = +prompt('Jogador 1 | Escolha a linha que quer jogar [1] [2] [3]: ');
            jogada1Coluna = prompt('Escolha a coluna que quer jogar [A] [B] [C]: ')
            verificacao = verificar(jogada1Linha, jogada1Coluna);
        }
        
        if (jogador1 == 'x'){
            
            jogadaX(jogada1Linha, jogada1Coluna);

            tabuleiro1();
        }else{
            jogadaO(jogada1Linha, jogada1Coluna);

            tabuleiro1();
        }
       
        let verificaGanhador = ganhador()
       
        if (verificaGanhador == true){
            console.log();
            console.log('jogador 1 Ganhou');
            winJog1++
            countPartidas++
            console.log();
            console.log(`Partidas jogadas: ${countPartidas}`);
            console.log();
            
            let jogaNovamente = prompt('Deseja jogar novamente? [S] [N]: ').toLowerCase();
            if (jogaNovamente == 's'){
                let jogoNovo = novoTab();                
                tabuleiro1(jogoNovo);
                continue;
            }else{
                console.log();
                grandeVencedor(winJog1, winJog2);
                break;
            }
        }

        let verificaEmpate = empate();
       
        if (verificaEmpate == false){
            console.log();
            console.log("Empatou!")
            countPartidas++
            console.log();
            console.log(`Partidas jogadas: ${countPartidas}`);
            console.log();

            let jogaNovamente = prompt('Deseja jogar novamente? [S] [N]: ').toLowerCase();
            if (jogaNovamente == 's'){
                let jogoNovo = novoTab();                
                tabuleiro1(jogoNovo);
                continue;
            }else{
                console.log();
                grandeVencedor(winJog1, winJog2);
                break;
            }
        }
        
        }else{
        let jogada2Linha = +prompt('Jogador 2 | Escolha a linha que quer jogar [1] [2] [3]: ');
        
        while (jogada2Linha != 1 && jogada2Linha != 2 && jogada2Linha != 3){
            console.log('Jogada inválida!')
            jogada2Linha = +prompt('Jogador 2 | Escolha a linha que quer jogar [1] [2] [3]: ');
        }
        
        let jogada2Coluna = prompt('Escolha a coluna que quer jogar [A] [B] [C]: ');       
        
        while (jogada2Coluna != 'a' && jogada2Coluna != 'b' && jogada2Coluna != 'c'){
            console.log('Jogada inválida!')
            jogada2Coluna = prompt('Jogador 2 | Escolha a coluna que quer jogar [A] [B] [C]: ');
        }
        
        let verificacao = verificar(jogada2Linha, jogada2Coluna);
       
        while (verificacao == false){
            console.log('Este espaço está ocupado!');
            console.log();
            jogada2Linha = +prompt('Jogador 2 | Escolha a linha que quer jogar [1] [2] [3]: ');
            jogada2Coluna = prompt('Escolha a coluna que quer jogar [A] [B] [C]: ')
            verificacao = verificar(jogada2Linha, jogada2Coluna);
        }
        
        if (jogador1 == 'x'){
            jogadaO(jogada2Linha, jogada2Coluna);

            tabuleiro1();
        }else{
            jogadaX(jogada2Linha, jogada2Coluna);

            tabuleiro1();
        }
        verificaGanhador = ganhador()
       
        if (verificaGanhador == true){
            console.log();
            console.log('jogador 2 Ganhou');
            winJog2++
            countPartidas++
            console.log();
            console.log(`Partidas jogadas: ${countPartidas}`);
            console.log();

            let jogaNovamente = prompt('Deseja jogar novamente? [S] [N]: ').toLowerCase();
            if (jogaNovamente == 's'){
                let jogoNovo = novoTab();                
                tabuleiro1(jogoNovo);
                continue;
            }else{
                console.log();
                grandeVencedor(winJog1, winJog2);
                break;
            }
        }
        verificaEmpate = empate();
       
        if (verificaEmpate == false){
            console.log();
            console.log("Empatou!")
            console.log();
            countPartidas++
            console.log(`Partidas jogadas: ${countPartidas}`);
            console.log();

            let jogaNovamente = prompt('Deseja jogar novamente? [S] [N]: ').toLowerCase();
            if (jogaNovamente == 's'){
                let jogoNovo = novoTab();                
                tabuleiro1(jogoNovo);
                continue;
            }else{       
                console.log();
                grandeVencedor(winJog1, winJog2);         
                break;
            }
        }
    }
}
