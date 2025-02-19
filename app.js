// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigoTextInput = document.getElementById('amigo');
amigoTextInput.addEventListener('keyup', (event)=> {
    if (event.key === 'Enter'){
        console.log('Enter key pressed!');
        agregarAmigo();
    }
    return;
});
function agregarAmigo(){
    console.log('Dentro de la funcion agregarAmigo()');
    let nombreAmigo = document.getElementById('amigo').value;
    if(nombreAmigo.trim().length<1 || nombreAmigo == null){
        alert('Favor de ingresar un nombre valido!');
        return;
    }
    //checar duplicados
    if(amigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo} ya existe!`);
    }
    amigos.push(nombreAmigo);
    console.log(amigos);
    
    //limpiar lista para evitar duplicados
    document.querySelector('#listaAmigos').innerHTML="";
    document.querySelector('#resultado').innerHTML="";
    let currentList = "";
    for(let i = 0; i<amigos.length; i++){
        currentList += '<li>'+amigos[i]+'</li>';
    }
    console.log(currentList);
    document.querySelector('#listaAmigos').innerHTML= currentList;

    document.getElementById('amigo').value='';
    return;
}

function sortearAmigo() {
    console.log('Dentro de sortearAmigo');
    if(amigos.length>0){
        let index = Math.floor((Math.random()*amigos.length));
        console.log(`Entre ${amigos.length} amigos, se seleccionó aleatoriamente a ${index}`);
        console.log('Amigo sorteado: ' + amigos[index]);
        document.getElementById('resultado').innerHTML = amigos[index];
    } else{
        alert('No hay amigos que sortear!');
    }
    
    return;
}
