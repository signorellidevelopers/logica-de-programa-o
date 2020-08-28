let l1 = prompt('Digite o primeiro lado');
 l1 = Number(l1);
let l2 = prompt('Digite  o outro lado');
 l2 = Number(l2);

function area(l1,l2){
 
    if (l1 === undefined || l2 === undefined ) {
        throw new Error(' para calcular area é necessario dois números');
    }

    if(isNaN(l1) || isNaN(l2)){
        alert('Digite apenas Números')
    }
    alert('Área total é ' + l1 * l2  +  'M2');
}