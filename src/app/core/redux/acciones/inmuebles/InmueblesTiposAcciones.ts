import { Inmueble } from '../../../../feature/Inmuebles/models/Inmueble';

export const LISTAR_INMUEBLES = 'LISTAR_INMUEBLES';
export const AGREGAR_INMUEBLE = 'AGREGAR_INMUEBLE';
export const EDITAR_INMUEBLE = 'EDITAR_INMUEBLE';

interface AccionListarInmueble {
    type: typeof LISTAR_INMUEBLES;
    payload: Inmueble[];
    cantidadTotalInmuebles: number;
}

interface AccionAgregarInmueble {
    type: typeof AGREGAR_INMUEBLE;
    payload: Inmueble;
}

interface AccionEliminarInmueble {
    type: typeof EDITAR_INMUEBLE;
    payload: Inmueble;
}

export type TiposAccionesInmueble =
    | AccionListarInmueble
    | AccionAgregarInmueble
    | AccionEliminarInmueble;
