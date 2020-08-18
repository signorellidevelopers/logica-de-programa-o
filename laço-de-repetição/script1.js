let num = prompt('Digite um número');
num = Number(num);


for(let i = 1; i <= 10; i++){
    document.write(num + 'x' + i + '=' + num * i + '<br>');
}
document.write('saiu do loop');