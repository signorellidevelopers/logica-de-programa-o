let n1 = prompt('digite um número');
n1 = Number(n1);
escreve();
function escreve(){
    let output = document.querySelector('#output');
    output.innerHTML = n1;
}
 function calculadora(simbolo){
 let n = prompt('Digite outro número');
 n = Number(n);
    switch(simbolo){
        case '+':
        n1 += n;
        break;
        case '-':
        n1 -= n;
        break;
        case '*':
        n1 *= n;
        break;
        case '/':
        n1 /= n;
        break;  
    }
    escreve();
    }
  
