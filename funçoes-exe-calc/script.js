let n1 = prompt('digite um número');
n1 = Number(n1);
escreve();
function escreve(){
    let output = document.querySelector('#output');
    output.innerHTML = n1;
}
 function mais(){
 let n = prompt('Digite outro número');
 n = Number(n);
 n1 = n1 + n;
 escreve();
 }
 function menos(){
    let n = prompt('Digite outro número');
    n = Number(n);
    n1 = n1 - n;
    escreve();
    }
    function mult(){
        let n = prompt('Digite outro número');
        n = Number(n);
       // n1 = n1 * n;
       n1 *= n;
        escreve();
        }
        function dividir(){
            let n = prompt('Digite outro número');
            n = Number(n);
            n1 = n1 / n;
            escreve();
            }