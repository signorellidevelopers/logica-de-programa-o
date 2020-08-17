let nt1 = prompt("digite sua 1° nota");
let nt2 = prompt("digite sua 2° nota");

nt1 = parseInt(nt1);
nt2 = parseInt(nt2);
let media = (nt1 + nt2 / 2 );
if(media >= 5 || nt1 > 7 || nt2 != 0){
    alert('aprovado')
} else{
    alert('reprovado')
}