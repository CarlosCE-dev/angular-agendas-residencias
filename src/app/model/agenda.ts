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

    id?: number = 0;
    nombre: string;
    persona: string;
    telefono: string;
    correo: string;
    fecha_inicio: string;
    fecha_inicio_f: string;
    fecha_fin: string;
    fehca_fin_f: string;
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
        } else if ( this.fecha_fin.trim() === "" ){
            return false;
        } else if ( this.fecha_inicio.trim() === "" ) {
            return false;
        }

        return true;
    }
}