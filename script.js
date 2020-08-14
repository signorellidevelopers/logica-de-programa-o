let nJogador1 = prompt('numero Jogador 1');
 nJogador1 = parseInt(nJogador1);
   
 let nJogador2 = prompt('numero Jogador 2');
 nJogado2 = parseInt(nJogador2);

 if(nJogador1 === nJogador2){
     alert('empate');
 } else{
     let nSorteado = parseInt(Math.random() * 2);
     if(nSorteado === 0){
        if(nJogador1 < nJogador2){
            alert('jogador1 ganhou');
        } else{
            alert('ganhau jogador 2');
        }
     } else{
        if(nJogador1 > nJogador2){
            alert('jogador 1 ganhou');
        } else{
            alert('ganhau jogador 2');
        }
     }
 }