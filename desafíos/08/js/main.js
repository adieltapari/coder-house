class Encuesta {
    constructor(nombre, cantidadPreguntas,cantidadDias,preguntas){
        this.nombre = nombre;
        this.cantidadPreguntas = cantidadPreguntas;
        this.cantidadDias = cantidadDias;
        this.preguntas =[preguntas];
    }
     
    toString(){
        return `Nombre encuesta: ${this.nombre}\nCantidad de dias activa: ${this.cantidadDias}\nCantidad de preguntas: ${this.cantidadPreguntas}`;
        //  equivalente como veniamos viendo concatenando con +
        //  console.log("Vehiculo: "+this.nombre+"\nCantidad de Puertas: "+this.cantidadPuertas+"\nColor: "+this.color+"\nKilometros "+this.kilometros);
    }
}

class Pregunta{
    constructor(nombre,opciones){
        this.nombre = nombre;
        this.opciones =[opciones];
    }
}

const preguntas =[];

preguntas.push(new Pregunta("¿Es recomendable usar var para declarar variables?",["Si", "No"]));

console.log(preguntas);

const nombre = prompt("Ingrese nombre de la encuesta");
const cantidadPreguntas = Number(prompt("Ingrese la cantidad de preguntas"));
const cantidadDias = Number(prompt("Ingrese la cantidad de dias que va a estar activa"));

const encuesta1 = new Encuesta(nombre, cantidadPreguntas, cantidadDias,preguntas);


let contenedor = document.createElement("div");
contenedor.innerHTML=`
<h1 class="box">Encuesta Creada</h2>
<h3 class="box">Titulo: ${nombre}</h3>
<h3 class="box">Cantidad de Preguntas: ${cantidadPreguntas}</h3>
<h3 class="box">Cantidad de dias activa: ${cantidadDias}</h3>
`;
document.body.appendChild(contenedor);

for (const pregunta of preguntas){
    let contenedor = document.createElement("div");
    contenedor.innerHTML=`
    <h1 class="box">Ejemplo</h1>
    <h3 class="box"> ${pregunta.nombre}</h3>
    <h3 class="box"> ${pregunta.opciones[0][0]} - ${pregunta.opciones[0][1]}</h3>
    `;
    
    document.body.appendChild(contenedor);
}


console.log(encuesta1);
//alert(encuesta1.toString());


