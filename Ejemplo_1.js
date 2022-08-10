var Nombre;
var Apellido;
var Usuario;
var Edad;
var Correo;
var Edad;
var dineroAhorrado;
var Deudas;

Nombre = "Carlos";
Apellido = "López";
Usuario = "Calincr";


console.log(Nombre +" "+ Apellido);

function Preferencias(nombre, apodo){
    console.log("Mi nombre es " + nombre + ", pero prefiero que me digas " + apodo + ".");
}   

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
    
    console.log("Solo puedes tomar los cursos gratis");

} 

else if(tipoDeSuscripcion === "Basic"){

    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");

}

else if(tipoDeSuscripcion === "Expert"){

    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");

}

else if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

var x = 0;

while (x != 4) {
    x++;
    console.log(x);
}

x = 10;

while (x != 2) {
    x--;
    console.log(x);
}

var Lista = [
    "Carlos", "Mariana", "Marta", "Juan"
];

var Listado = [
    {nom:"Carlos",
     Edd:20   
    },
    {nom:"Saul",
     Edd:25   
    },
    {nom:"Javier",
     Edd:28   
    }
];


function primero(Datos){
    console.log(Datos[0]);
}

function todos(Datos){
    for (const varios of Datos) {
            console.log(varios);
    }
}

function todosObjetos(Datos){
    for (const varios of Datos) {
            console.log(varios);
    }
}
