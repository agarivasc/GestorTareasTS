//Definir la clase Task
export class Tarea {
    //Constructor de la clase Task
    constructor(descripcion) {
        this.descripcion = descripcion;
        this.completado = false;
    }
    //Metodo para marcar la tarea como completada
    tareaCompletada() {
        this.completado = !this.completado;
    }
}
