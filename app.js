//CHALLENGE - AMIGO SECRETO 


const inputNombre = document.getElementById('amigo');
const listaNom = document.getElementById('listaAmigos')
const resultado = document.getElementById('resultado')
const reset = document.getElementById('resetButton')
let participantes = [];

function agregarAmigo() {

    if (!inputNombre.value) {
        alert("No se ha ingresado un nombre");
        return;
    } else if (participantes.includes(inputNombre.value.trim())) {
        alert("Este nombre ya esta enlistado.");
    } else {
        participantes.push(inputNombre.value);
        console.log(participantes);
        listaNom.innerHTML += `<li>${inputNombre.value}</li>`;
    }
    limpiarCaja();
}

// sorteo con verificación de datos, y empleo de librerias para funcion matematica 
function sortearAmigo() {
    if (participantes.length <= 0) {

        alert("ERROR, NO HAY PARTICIPANTES EN EL SORTEO");
        return;
    }
    const amigoSobrante = [...participantes];
    const ganador = participantes[Math.floor(Math.random() * participantes.length)];
    console.log(ganador);
    const amigoSecreto = amigoSobrante[ganador];
    amigoSobrante.splice(ganador, 1);
    participantes.splice(participantes.indexOf(amigoSecreto), 1);
    resultado.innerHTML = `Tu amigo secreto es <li>${ganador}</li>`;

}

function limpiarCaja() {
    let valorCaja = document.getElementById('amigo');
    valorCaja.value = '';
}

function updateList() {
    listaNom.innerHTML = "";
    participantes.forEach(function (participante) {
        const li = document.createElement('li');
        li.textContent = participante;
        listaNom.appendChild(li);
    })
}
resetButton.addEventListener('click', function () {
    particpantes = [];
    listaNom.innerHTML = "";
    resultado.textContent = "";
    alert("Todos los participantes fueron eliminados");
})
