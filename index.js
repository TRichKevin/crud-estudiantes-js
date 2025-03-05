import GestorEstudiantes from './modules/GestorEstudiantes.js';
import readline from 'readline';

const gestor = new GestorEstudiantes();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("\n--- Menú de Gestión de Estudiantes ---");
    console.log("1. Agregar Estudiante");
    console.log("2. Listar Estudiantes");
    console.log("3. Actualizar Estudiante");
    console.log("4. Eliminar Estudiante");
    console.log("5. Salir");
}

function ejecutarOpcion(opcion) {
    switch (opcion) {
        case '1':
            rl.question('Nombre del estudiante: ', (nombre) => {
                rl.question('Edad del estudiante: ', (edad) => {
                    rl.question('Nivel del estudiante: ', (nivel) => {
                        gestor.agregarEstudiante(nombre, edad, nivel);
                        iniciar(); 
                    });
                });
            });
            break;
        case '2':
            gestor.listarEstudiantes();
            iniciar(); 
            break;
        case '3':
            rl.question('ID del estudiante a actualizar: ', (idActualizar) => {
                rl.question('Nuevo nombre: ', (nuevoNombre) => {
                    rl.question('Nueva edad: ', (nuevaEdad) => {
                        rl.question('Nuevo nivel: ', (nuevoNivel) => {
                            gestor.actualizarEstudiante(idActualizar, nuevoNombre, nuevaEdad, nuevoNivel);
                            iniciar(); 
                        });
                    });
                });
            });
            break;
        case '4':
            rl.question('ID del estudiante a eliminar: ', (idEliminar) => {
                gestor.eliminarEstudiante(idEliminar);
                iniciar(); 
            });
            break;
        case '5':
            console.log("Saliendo...");
            rl.close();
            break;
        default:
            console.log("Opción no válida.");
            iniciar(); 
    }
}

function iniciar() {
    mostrarMenu();
    rl.question('Seleccione una opción: ', (opcion) => {
        ejecutarOpcion(opcion);
    });
}

iniciar();