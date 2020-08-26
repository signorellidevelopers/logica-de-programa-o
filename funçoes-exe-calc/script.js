function criar(){
let tb = prompt('Digite o número da tabuada que vc quer saber');
    tb = Number(tb);
    let i = 1;
    // while(i<= 10){
    //     msg += tb + 'x' + i + ' = ' + (tb*i) + '<br>';
    //     i++;
    //     output.innerHTML = msg;
    // }
    for(i == 0; i<=10; i++){
        
    msg += tb + 'x' + i + ' = ' + (tb*i) + '<br>';
    i++;
    output.innerHTML = msg;
    }
    
}
function limpar(){
     msg ='';
     output.innerHTML = msg;
}
let output = document.querySelector('#output');
let msg ='';
