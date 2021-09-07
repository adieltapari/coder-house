function alert1000() {
    var numero = parseInt(prompt("Ingrese un numero"));
    if (numero > 1000) {
        alert("El numero ingresado es: " + numero + " y es mayor a 1000");
    } else {
        alert("El numero ingresado es: " + numero + " y es menor a 1000");
    }
}

function palabra() {
    var palabra = prompt("Ingrese una palabra");

    if (palabra == "Hola") {
        alert("La palabra ingresada es: " + palabra);
    } else {
        alert("El texto ingresado es: " + palabra + " y es distinto a 'Hola'");
    }
}

function comparar() {
    const num1 = 100;
    const num2 = 50;
    let numero1 = parseInt(prompt("Ingrese un valor para A"));
    let numero2 = parseInt(prompt("Ingrese un numero B"))

    if (numero1 > numero2) {
        alert("A = " + numero1 + " > " + "B = " + numero2);
    } else if (numero1 == numero2) {
        alert("A = " + numero1 + " es igual a " + "B = " + numero2);
    } else {
        alert("B = " + numero2 + " > " + "A = " + numero1);
    }

    if (numero1 >= num1) {
        alert("El valor ingresado es A = " + numero1);
    } else if ((numero1 >= num2) && (numero1 < num1)) {
        alert("A = " + numero1 + " se encuentra entre " + num2 + " y " + num1);
    } else {
        alert("El valor A = " + numero1 + " es menor a " + num2);
    }
}