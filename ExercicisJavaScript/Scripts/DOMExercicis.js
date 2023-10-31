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