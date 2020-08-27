let n1 = prompt('digite um número');
n1 = Number(n1);
escreve(n1);
function inicioCalc(simbolo){
    let n1 = document.querySelector('#output').textContent;
    n1 = Number(n1)
    let n2 = prompt('digite outro numero');
    n2 = Number(n2);
    let msg = calculadora(simbolo, n1, n2);
    escreve(msg);
}
function escreve(msg){
    let output = document.querySelector('#output');
    output.innerHTML = msg;
}
 function calculadora(simbolo, n1, n2){
    let numeroCalc = null;
    switch(simbolo){
        case '+':
         numeroCalc = n1 += n2;
        break;
        case '-':
            numeroCalc =n1 -= n2;
        break;
        case '*':
            numeroCalc = n1 *= n2;
        break;
        case '/':
      numeroCalc =  n1 /= n2;
        break;  
    }
    return numeroCalc;
    }
  
