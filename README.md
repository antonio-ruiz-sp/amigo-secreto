<h1 align="center"> amigo secreto</h1>

![amigo-secreto](https://github.com/user-attachments/assets/ecceecb3-0fe8-4de5-a4fd-70ccbc674b40)


```md
# Proyecto "Amigo Secreto" 

## Descripción  del proyecto
Este proyecto es un sistema que permite a los usuarios agregar nombres a una lista de amigos y luego sortear al azar un "Amigo Secreto". Fue desarrollado en **JavaScript** y manipula el **DOM** para actualizar dinámicamente la lista de participantes y mostrar el resultado del sorteo.  

El objetivo de este desafío es mejorar las habilidades en lógica de programación y la manipulación de arreglos en JavaScript.  

---

## Describe Funcionalidades  
✅ Permite agregar nombres a una lista de amigos.  
✅ Evita agregar nombres duplicados.  
✅ Muestra la lista actualizada en pantalla.  
✅ Sortea un amigo secreto al azar.  
✅ Muestra el resultado en la interfaz.  

---

## Listando Archivos principales  
- `index.html` → Contiene la estructura HTML de la aplicación.  
- `app.js` → Implementa la lógica de agregar amigos y realizar el sorteo.  
- `style.css` → Contiene los estilos de la interfaz (opcional).  

---

## Instalación y ejecución del código
1. Descarga o clona este repositorio.  
2. Abre el archivo **`index.html`** en cualquier navegador.  
3. Escribe un nombre en el campo de texto y presiona "Añadir".  
4. Cuando hayas agregado todos los nombres, presiona "Sortear amigo".  
5. El resultado aparecerá en pantalla.  

---

## Código principal y funciones

### `agregarAmigo()`  
Esta función:  
- Obtiene el nombre ingresado en el campo de texto.  
- Valida que el campo no esté vacío.  
- Evita nombres repetidos en la lista.  
- Agrega el nombre al arreglo y actualiza la lista en pantalla.  

```javascript
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

```

### funcion `sortearAmigo()`  
Esta función:  
- Verifica que haya al menos un nombre en la lista.  
- Genera un índice aleatorio entre 0 y tamaño de la lista - 1, y selecciona el nombre asociado al índice.  
- Muestra el resultado en pantalla.  

```javascript
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
```

---

## Pruebas y mejoras futuras  

### Pruebas actuales  
- **Prueba 1**: Agregar nombres y compararlos con la lista.  
- **Prueba 2**: Uso de *template strings* para mostrar el resultado.  
- **Prueba 3**: Se planea agregar un bucle para repetir el sorteo si el usuario lo desea.  

### Posibles mejoras  
- Agregar opción para eliminar nombres de la lista.
- Estilizar mejor la interfaz con **CSS**.  
- Implementar un botón para reiniciar la lista.  
- Permitir exportar la lista de amigos en un archivo de texto.  

---

## Autor :Antonio Ruiz.
Este proyecto fue desarrollado como parte de un desafío de programación en JavaScript para AluraOne, con el objetivo de mejorar habilidades en lógica y manipulación del **DOM**.   
```
