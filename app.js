let listaDeAmigos = [];

//funcion de agregar amigos con su respectiva validacion 
function agregarAmigo() {
    let nombreDeAmigo = document.getElementById("amigo").value;

    // validar que no esté vacío
    if (nombreDeAmigo.trim() === "") {
        alert("Digite un nombre de amigo!");
        return;
    }
    //validar que no se repita
    if (listaDeAmigos.includes(nombreDeAmigo)) {
        alert("Este amigo ya está en la lista!");
        return;
    }
    // guardar en el array
    listaDeAmigos.push(nombreDeAmigo);

    // limpiar el input
    document.getElementById("amigo").value = "";

    // actualizar la lista en pantalla
    mostrarAmigos();
}
// función para mostrar la lista en el <ul>
function mostrarAmigos() {
    let ul = document.getElementById("listaAmigos");

    // limpiar lista antes de volver a pintarla
    ul.innerHTML = "";

    // recorrer el array y crear <li> para cada amigo
    listaDeAmigos.forEach(function (amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    // 1. Verificar que la lista no esté vacía
    if (listaDeAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // 2. Generar un índice aleatorio
    let indice = Math.floor(Math.random() * listaDeAmigos.length);

    // 3. Obtener al ganador
    let ganador = listaDeAmigos[indice];

    // 4. Mostrar el ganador en el <ul id="resultado">
    let ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = ""; // limpiar sorteos anteriores

    let li = document.createElement("li");
    li.textContent = ganador;
    ulResultado.appendChild(li);
}


