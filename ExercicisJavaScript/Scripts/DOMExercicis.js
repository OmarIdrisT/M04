// EXERCICI 1
function estiljs() {
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.fontSize = "50px";
}

// EXERCICI 2
function prenValorForm() {
    let nom = document.getElementsByTagName("input")[0].value;
    let cognom = document.getElementsByTagName("input")[1].value;

    console.log("Nom: " + nom);
    console.log("Cognom: " + cognom);
}

// EXERCICI 3
function colorjs() {
    document.getElementsByClassName("paragrafEx3")[0].style.backgroundColor = "red";
    document.getElementsByClassName("paragrafEx3")[1].style.backgroundColor = "blue";
    document.getElementsByClassName("paragrafEx3")[2].style.backgroundColor = "green";
}

// EXERCICI 4

function obtenirAtributs() {
    let element = document.getElementById("itb");
    let attributes = element.attributes;
    console.log(attributes);
}

// EXERCICI 5

function insertarFila() {
    let tabla = document.getElementById("Taula");
    let fila = tabla.insertRow(0);
    let cella1 = fila.insertCell();
    let cella2 = fila.insertCell();
    cella1.innerHTML = "Nueva fila celda 1";
    cella2.innerHTML = "Nueva fila celda 2";
}

// EXERCICI 6

function modificarCella() {
    let taula = document.getElementById("Taula2");
    let input = document.getElementById("valorInput").value;
    let fila = document.getElementById("filaInput").value;
    let cella = document.getElementById("cel·laInput").value;
    taula.rows[fila - 1].cells[cella - 1].innerHTML = input;
}

// EXERCICI 7

function crearTaula() {
    let numFiles = parseInt(prompt("Nombre files:"));
    let numColumnes = parseInt(prompt("Nombre columnes:"));

    var taula7 = document.getElementById("Taula7");

    taula7.innerHTML="";

    for (let i = 0; i < numFiles; i++) {
        var filaTaula7 = document.createElement("tr");

        for (let j = 0; j < numColumnes; j++) {
            var cel·laTaula7 = document.createElement("td");
            filaTaula7.appendChild(cel·laTaula7);
        }
        taula7.appendChild(filaTaula7);
    }
}

// EXERCICI 8

function eliminarValor() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.remove(dropdown.selectedIndex);
}

// EXERCICI 9

function mostrarValors() {
    var dropdown = document.getElementById("myDropdown");
    var valors = "";
    for (var i = 0; i < dropdown.length; i++) {
        valors += dropdown.options[i].value + ": " + dropdown.options[i].text + "\n";
    }
    alert("Valors del dropdownlist:\n\n" + valors);
}

// EXERCICI 10

function calcularVolum() {
    var radi = parseFloat(document.getElementById("radi").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var volum = Math.PI * radi * radi * altura;
    document.getElementById("resultat").innerHTML = "El volum del cilindre és: " + volum.toFixed(2);
}
