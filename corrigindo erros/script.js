let n1 = prompt('digite um número');
n1 = Number(n1);
escreve(n1);
function inicioCalc(simbolo){
    let n1 = document.querySelector('#output').textContent;
    n1 = Number(n1)
    let n2 = prompt('digite outro numero');
    n2 = Number(n2);
    // try{
        
    // } catch(e){
    //     console.log(e);
    // }
    let msg = calculadora(simbolo, n1, n2);
    escreve(msg);
}
function escreve(msg){
    let output = document.querySelector('#output');
    output.innerHTML = msg;
}
 function calculadora(simbolo, n1, n2){
    if(simbolo !== '+' && simbolo !== '-' && simbolo !== '*'  && simbolo !== '/' ){
        throw new Error('Digite um simbolo valido')

        
    }
      if(isNaN(n1) || isNaN(n2)){
          throw new Error('Digite somete Números !')
      
      }
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
  
