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
    document.getElementsbyId("paragrafEx3").style.backgroundColor = "red";
}
