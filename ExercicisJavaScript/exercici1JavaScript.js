let numeroUsuario = window.prompt("Introdueix un número de l'1 al 100");
let numeroRandom = Math.floor(Math.random()*100);

console.log(numeroRandom);

if (numeroUsuario != null) {
    do {

        if (numeroUsuario > numeroRandom) {
            window.alert("El teu número és massa gran, segueix intentant.");
            numeroUsuario = window.prompt("Introdueix un número de l'1 al 100");
        }
    
        else if (numeroUsuario < numeroRandom) {
            window.alert("El teu número és massa petit, segueix intentant.");
            numeroUsuario = window.prompt("Introdueix un número de l'1 al 100");
     
    } 
    }while (numeroUsuario != numeroRandom)

    window.alert("Enhorabona, has acertat el número");
}
else {
    window.alert("Te rendiste, lamentable")
}



