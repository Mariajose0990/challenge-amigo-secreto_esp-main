// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista con los nombres de los amigos.
let amigos = [];

function agregarAmigo() {
  let cajaNombre = document.getElementById("amigo");
  let nombre = cajaNombre.value;

  // validar la entrada
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Actualizar Array
  amigos.push(nombre);

  cajaNombre.value = "";
  // Mostrar el array en la lista
  actualizarLista();
  // Limpiar el campo de entrada
}

function actualizarLista() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = amigos.join(", ");
}

function sortearAmigo() {
  if (amigos.length === 0) {
    document.getElementById("resultado").innerHTML = "No hay amigos en la lista";
    return;
  }


  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  document.getElementById("resultado").innerHTML = "Tu amigo secreto es: " + amigoSorteado;
}