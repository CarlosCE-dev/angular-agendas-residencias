import * as moment from 'moment';

export class Agenda {

    constructor( agenda:any = {} ){
        this.id = agenda.id || 0;
        this.nombre = agenda.nombre || "";
        this.persona = agenda.persona || "";
        this.telefono = agenda.telefono || "";
        this.correo = agenda.correo || "";
        this.fecha_inicio = agenda.fecha_inicio || moment().format('YYYY-MM-DDTHH:MM');
        this.fecha_fin = agenda.fecha_fin || moment().format('YYYY-MM-DDTHH:MM');
        this.fecha_inicio_f = "";
        this.fehca_fin_f = "";
    }

    id?: Number = 0;
    nombre: String;
    persona: String;
    telefono: String;
    correo: String;
    fecha_inicio: String;
    fecha_inicio_f: String;
    fecha_fin: String;
    fehca_fin_f: String;
    status: Boolean = true;

    validateModel(): boolean {
        if ( this.nombre.trim() === ""){
            return false;
        } else if ( this.persona.trim() === ""){
            return false;
        } else if ( this.telefono.trim() === "" ) {
            return false;
        } else if ( this.correo.trim() === "" ) {
            return false;
        } else if ( this.fecha_fin.trim() === "" ){
            return false;
        } else if ( this.fecha_inicio.trim() === "" ) {
            return false;
        }

        return true;
    }
}