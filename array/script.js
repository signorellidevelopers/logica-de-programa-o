let arr = new Array(2,4,6,4,2,8);
somaOsPares(arr);
function somaOsPares(arr){
    let soma = arr;
for(let i = 0; i < arr.length; i++){
    console.log(i);
    console.log(arr[i]);

    if(!isNaN(arr[i]) % arr[i] % 2 === 0){
        soma += arr[i];
    }
}
alert('a soma dos números pares é  ' + soma );
}