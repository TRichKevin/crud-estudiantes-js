class Estudiante {
    constructor(nombre, edad, nivel) {
        this.id = Estudiante.incrementId();
        this.nombre = nombre;
        this.edad = edad;
        this.nivel = nivel;
    }

    static incrementId() {
        if (!this.currentId) {
            this.currentId = 1;
        } else {
            this.currentId++;
        }
        return this.currentId;
    }
}

export default Estudiante;