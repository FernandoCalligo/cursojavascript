class Estudiante {
    constructor (nombre, apellido, materia, nota){
        this.nombre = nombre;
        this.apellido = apellido;
        this.materia = materia;
        this.nota = nota;
    }
}

const estudiante1 = new Estudiante ("Fernando", "Calligo", "Programación", 10);
const estudiante2 = new Estudiante ("Pepe", "Lopez", "Matematicas", 6);
const estudiante3 = new Estudiante ("Juanito", "Perez", "Programación", 7);
const estudiante4 = new Estudiante ("Ana", "Gomez", "Programación", 4);
const estudiante5 = new Estudiante ("Julian", "Alvarez", "Historia", 3);

const estudiantes = [estudiante1, estudiante2, estudiante3, estudiante4, estudiante5];

let opcion = parseInt(prompt("Ingrese la accion deseada: 1 - Ver aprobados | 2 - Ver desaprobados"));

switch (opcion) {
    case 1:
        const aprobados = estudiantes.slice(0, 3);
        console.log(aprobados);
        break;
    case 2:
        const desaprobados = estudiantes.slice (3, 5);
        console.log(desaprobados);
        break;
}