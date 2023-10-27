function multiplicar(){
    // Obtinc valors dels inputs
    let inputs = document.getElementsByTagName("input");
    let valor1 = inputs[0].value;
    let valor2 = inputs[1].value;
    let resultado = valor1 * valor2

    // Modifico el valor del p
    document.getElementsByTagName("p")[0].innerHTML = `El resultado es ${resultado}`;
}