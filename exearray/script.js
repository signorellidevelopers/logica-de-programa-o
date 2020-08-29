let cadastroPessoas1 = new Object();
 cadastroPessoas1.nome = 'João'
 cadastroPessoas1.email = 'aaaaa@eeeee.com'

 let cadastroPessoas2 = new Object();
 cadastroPessoas2.nome = 'Maria'
 cadastroPessoas2.email = 'aaaaa@eeeee.com'

 let cadastroPessoas3 = new Object();
 cadastroPessoas3.nome = 'Paulo'
 cadastroPessoas3.email = 'aaaaa@eeeee.com'
 let cadastros = new Array(cadastroPessoas1, cadastroPessoas2, cadastroPessoas3);
 console.log(cadastros);

    msg = '';
 let cas = 0;
 while(cadastros[cas]){
     console.log(cadastros[cas].nome);
    msg += cadastros[cas].nome + '-' + cadastros[cas].email + '<br>';
    cas++;
 }

    document.querySelector('#output').innerHTML = msg