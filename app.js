// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigo = [];

function agregarAmigo(){
    let nombreAmigoSecreto = document.getElementById('amigo').value;

    //Si el campo esta vacio muestra el mensaje por favor inserte un Nombre
    if (nombreAmigoSecreto == '') {
        alert ("Por favor inserte un Nombre")
    }else {

        //verifica si el nombre ya fue ingresado y limpia la caja de texto
        if(amigo.includes(nombreAmigoSecreto)){
            alert("El nombre ya fue ingresado");
            limpiarCaja();
        }else{
            amigo.push(nombreAmigoSecreto);
            listarNombreDeAmigos();
            limpiarCaja();
        }
    }
    return
}

//limpia la caja de texto
function limpiarCaja (){
    document.querySelector('#amigo').value = '';
    return;
}

//Funcion para actualizar la lista de nombres de Amigos
function listarNombreDeAmigos() {
    let listaNombreAmigos = document.getElementById('listaAmigos');
    listaNombreAmigos.innerHTML = "";
    
    //for recorre el elemento lista "amigo" para crear elementos "li" para cada nombre que se ingresa
    for(let i = 0; i < amigo.length; i++){
        let nombresEnListado = amigo[i];
        let elementosLista =  document.createElement('li');
        
        //Pone el nombre ingresado en el elemento <li> y lo agrega a la lista
        elementosLista.textContent = nombresEnListado;
        listaNombreAmigos.appendChild(elementosLista);
    }
}

//Funcion amigo que se activa cuando le dan click al botón sortear amigo. 
function sortearAmigo(){

    //Verifica la cantidad de elementos dentro del arreglo, amigo.leght devuelve cuantos elementos hay dentro del mismo. 
    if (amigo.length === 0){
        alert("No hay amigos en la Lista")
    }else{
       
        //Genera un número aleatorio entero entre 0 y amigo.length - 1, que corresponde a un índice válido del arreglo.
        let amigoAleatorio = Math.floor(Math.random()*amigo.length);
        let sorteoDeAmigo = amigo[amigoAleatorio];
        let resultadoNombre = document.getElementById('resultado'); 
        resultadoNombre.innerHTML = `Tu amigo sorteado es : <li>${sorteoDeAmigo}</li>`

        //Obtiene el elemento HTML donde se listaban todos los nombres agregados (el <ul id="listaAmigos">).
        let listaNombreAmigos = document.getElementById('listaAmigos');
        listaNombreAmigos.innerHTML = "";
    }
}