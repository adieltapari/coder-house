function calcularJubilación() {
    let apellido = prompt("Por favor ingrese su apellido");
    let nombre = prompt("Ahora ingrese su nombre");
    let edad = prompt("Cual es tu edad?");
    let edadParse = parseInt(edad);
    let año_actual = 2021;
    let jubilación = 65;

    let calculo = + jubilación - + edadParse;
    let calc_jubila = + año_actual + calculo;

    alert("Hola " + nombre + " " + apellido);
    alert("Te vas a jubilar en el año " + calc_jubila);

}