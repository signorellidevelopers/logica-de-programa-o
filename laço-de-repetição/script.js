let num = prompt('Digite um número');
num = Number(num);

let indice = 1;

while (indice <=10) {
    document.write(num + 'x' + indice + '=' + num * indice + '<br>');
    indice = indice + 1;
}
alert('fim do loop');