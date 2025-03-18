
// Lista con los nombres de los amigos.
let amigos = [];


function agregarAmigo () {
  let cajaNombre = document.getElementById("amigo");
  let nombre = cajaNombre.value;

  // validar la entrada
  if (nombre == ""){
    alert("Por favor, ingrese un nombre.");
    return;
  }
 // Actualizar Array
  amigos.push(nombre);

  // Mostrar el array en la lista
  actualizarLista();
  // Limpiar el campo de entrada 
  cajaNombre.value = "";

}

function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = amigos;
      while (animgos.length < 8 ) {
        if (amigos.length === 2) {
          alert ("Se requiere más de dos nombres para jugar.");
         }else if (amigos.length < 8 ) {
          alert ("Llegaste al número límite de nombres");
          break;
         } 
      }
      }


function sortearAmigo() {
  if (amigos.length=== 0) {
    document.getElementById("resultado").innerHTML="No hay amigos en la lista";
   return;
  }

  let indiceAleatorio = Math.floor(Math.ramdom()* amigos.length);
  let amigoSorteado = amigos [indiceAleatorio];

  document.getElementById ("resultado").innerHTML= "Tu amigo secreto es:"+ amigoSorteado;
  
}
 
actualizarLista();