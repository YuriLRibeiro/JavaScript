var p = document.getElementsByTagName('p');


/*Alterar conteudo com JS

alert(p.length);

alert(p[0].innerHTML);

p[0].innerHTML = 'manipulado via JS!';

for (var i = 0; i< p.length; i++){
    p[i].innerHTML = 'manipulado via JS! ' + i;
}
*/
for(var i = 0; i<10; i++){
    p[0].innerHTML = p[0].innerHTML + i;
}


