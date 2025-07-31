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
            
            //Agrega el elemento a la lista
            amigo.push(nombreAmigoSecreto);
            
            //lista los nombres ingresados
            listarNombreDeAmigos();
            
            //limpia el campo luego que se ingrese un nombre
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

    //Llama al elemento lista del index
    let listaNombreAmigos = document.getElementById('listaAmigos');

    //Limpia la lista para asegurarse de que no haya duplicados al actualizar.
    listaNombreAmigos.innerHTML = "";
    
    //for recorre el elemento lista "amigo" para crear elementos "li" para cada nombre que se ingresa
    for(let i = 0; i < amigo.length; i++){
        
        //En el arreglo coloca en la posición i el nombre que se ingresa y lo guarda para usarlo más fácilmente luego.
        let nombresEnListado = amigo[i];

        //Crea un nuevo elemento HTML <li>
        let elementosLista =  document.createElement('li');
        
        //Pone el nombre ingresado en el elemento <li>
        elementosLista.textContent = nombresEnListado;

        //Agrega el elemento <li> al elemento <ul> para visualizar la lista en la pantalla.
        listaNombreAmigos.appendChild(elementosLista);
    }
}

//Define la funcion amigo que se activa cuando le dan click al botón sortear amigo. 
function sortearAmigo(){

    //Verifica la cantidad de elementos dentro del arreglo, amigo.leght devuelve cuantos elementos hay dentro del mismo. 
    if (amigo.length === 0){
        alert("No hay amigos en la Lista")
    }else{
       
        //Genera un número aleatorio entero entre 0 y amigo.length - 1, que corresponde a un índice válido del arreglo.
        let amigoAleatorio = Math.floor(Math.random()*amigo.length);
        
        //Usa el índice aleatorio generado para obtener el nombre correspondiente del arreglo amigo.
        let sorteoDeAmigo = amigo[amigoAleatorio];
        
        //Obtiene el elemento del DOM donde se mostrará el resultado del sorteo (el <ul id="resultado">).
        let resultadoNombre = document.getElementById('resultado'); 

        // Muestra el nombre del amigo sorteado dentro del elemento resultado, usando una etiqueta <li>.
        resultadoNombre.innerHTML = `Tu amigo sorteado es : <li>${sorteoDeAmigo}</li>`

        //Obtiene el elemento HTML donde se listaban todos los nombres agregados (el <ul id="listaAmigos">).
        let listaNombreAmigos = document.getElementById('listaAmigos');
        
        //Limpia completamente la lista visual de amigos para que ya no se vean en pantalla después del sorteo.
        listaNombreAmigos.innerHTML = "";
    }
}