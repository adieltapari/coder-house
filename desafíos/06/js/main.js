
    class Encuesta {
        constructor(nombre, cantidadPreguntas,cantidadDias){
            this.nombre = nombre;
            this.cantidadPreguntas = cantidadPreguntas;
            this.cantidadDias = cantidadDias;
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
            this.opciones = opciones;
        }
    }
    
    const preguntas =[];

    preguntas.push(new Pregunta("pregunta1","opcion1"));

    console.log(preguntas);

    const nombre = prompt("Ingrese nombre de la encuesta");
    const cantidadPreguntas = Number(prompt("Ingrese la cantidad de preguntas"));
    const cantidadDias = Number(prompt("Ingrese la cantidad de dias que va a estar activa"));
    
    const encuesta1 = new Encuesta(nombre, cantidadPreguntas, cantidadDias);
    
    alert(encuesta1.toString());

