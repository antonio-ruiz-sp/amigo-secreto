// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigosLista = "";
function agregarAmigo(){
    console.log('Dentro de la funcion agregarAmigo()');
    let nombreAmigo = document.getElementById('amigo').value;
    if(nombreAmigo.trim().length<1 || nombreAmigo == null){
        alert('Favor de ingresar un nombre valido!');
        return;
    }
    amigos.push(nombreAmigo);

    console.log(amigos);
    
    amigos.forEach(comoLista);
    console.log(amigosLista);
    document.querySelector('#listaAmigos').innerHTML = amigosLista;
    document.getElementById('amigo').value='';
    return;
}

function sortearAmigo() {
    console.log('Dentro de sortearAmigo');
    let index = Math.floor((Math.random()*amigos.length));
    console.log(`Entre ${amigos.length} amigos, se seleccionó aleatoriamente a ${index}`);
    console.log('Amigo sorteado: ' + amigos[index]);
    return;
}
function comoLista(item, index){
    amigosLista += item + '<br>';

}