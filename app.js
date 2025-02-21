let listaAmigos = [];

function agregarAmigo() {
    let amigoIngresado = document.getElementById('amigo');
    let nombre = amigoIngresado.value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre valido.');
        return;
    }

    listaAmigos.push(nombre);
    // console.log('Lista actualizada:', listaAmigos);
    actualizarListaAmigos();
    amigoIngresado.value = '';
}

function actualizarListaAmigos() {
    let seccionListaAmigos = document.getElementById('listaAmigos');
    seccionListaAmigos.innerHTML = ''; //limpiar lista antes de actualizar

    listaAmigos.forEach((amigo, index) => {
        let listando = document.createElement('li');
        listando.textContent = amigo;

        // creando boton para eliminar
        let botonDelete = document.createElement('button');
        botonDelete.textContent = 'X';
        botonDelete.onclick = () => eliminarAmigo(index);

        listando.appendChild(botonDelete);
        seccionListaAmigos.appendChild(listando);
    });
}

function eliminarAmigo(index) {
    listaAmigos.splice(index, 1);
    actualizarListaAmigos();
}

function asignarTextoElemto(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Agrega al menos un nombre antes de sortear.');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    // console.log('Índice sorteado:', indiceSorteado);

    let amigoSecreto = listaAmigos[indiceSorteado];
    // console.log('Amigo seleccionado:', amigoSecreto); //amigoSecreto seleccionado

    asignarTextoElemto('#resultado', `🎉 Tu amigo secreto es: ${amigoSecreto} 🎉`);

    // limpiamos la lista
    listaAmigos = [];
    actualizarListaAmigos();
}

