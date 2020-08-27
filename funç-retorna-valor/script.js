

function areaAlert(){
    let l1 = prompt('Digite o primeiro lado');
    l1 = Number(l1);
    let l2 = prompt('Digite  o outro lado');
    l2 = Number(l2);
    let area = calcularArea(l1, l2);
    alert('A área total é ' + area);
}
function areaOutput(){
    let l1 = prompt('Digite o primeiro lado');
    l1 = Number(l1);
    let l2 = prompt('Digite  o outro lado');
    l2 = Number(l2);
    let area = calcularArea(l1, l2);
    document.querySelector('#output').innerHTML = 'A área total é ' + area;
}
function calcularArea(l1 , l2){
    return l1 *l2;
}