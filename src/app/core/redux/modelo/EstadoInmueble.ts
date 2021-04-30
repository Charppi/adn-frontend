import { Inmueble } from '../../../feature/Inmuebles/models/Inmueble';

export interface EstadoInmueble {
    inmuebles: Inmueble[];
    cantidadTotalInmueble: number;
}
