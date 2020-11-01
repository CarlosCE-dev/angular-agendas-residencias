export class Agenda {

    constructor( agenda:any = {} ){
        this.id = agenda.id || 0;
        this.nombre = agenda.nombre || "";
        this.persona = agenda.persona || "";
        this.telefono = agenda.telefono || "";
        this.correo = agenda.correo || "";
        this.fecha = agenda.fecha || new Date();
    }

    id?: number = 0;
    nombre: string;
    persona: string;
    telefono: string;
    correo: string;
    fecha: Date;
    status: boolean = true;

    validateModel(): boolean {
        if ( this.nombre.trim() === ""){
            return false;
        } else if ( this.persona.trim() === ""){
            return false;
        } else if ( this.telefono.trim() === "" ) {
            return false;
        } else if ( this.correo.trim() === "" ) {
            return false;
        } 

        return true;
    }
}