import Estudiante from './Estudiante.js';

class GestorEstudiantes {
    constructor() {
        this.estudiantes = {};
    }

    agregarEstudiante(nombre, edad, nivel) {
        const estudiante = new Estudiante(nombre, edad, nivel);
        this.estudiantes[estudiante.id] = estudiante;
        console.log(`Estudiante agregado: ${estudiante.nombre}`);
    }

    listarEstudiantes() {
        console.log("Lista de Estudiantes:");
        for (const id in this.estudiantes) {
            const estudiante = this.estudiantes[id];
            console.log(`ID: ${estudiante.id}, Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}, Nivel: ${estudiante.nivel}`);
        }
    }

    actualizarEstudiante(id, nombre, edad, nivel) {
        if (this.estudiantes[id]) {
            this.estudiantes[id].nombre = nombre;
            this.estudiantes[id].edad = edad;
            this.estudiantes[id].nivel = nivel;
            console.log(`Estudiante actualizado: ${nombre}`);
        } else {
            console.log(`Estudiante con ID ${id} no encontrado.`);
        }
    }

    eliminarEstudiante(id) {
        if (this.estudiantes[id]) {
            delete this.estudiantes[id];
            console.log(`Estudiante con ID ${id} eliminado.`);
        } else {
            console.log(`Estudiante con ID ${id} no encontrado.`);
        }
    }
}

export default GestorEstudiantes;