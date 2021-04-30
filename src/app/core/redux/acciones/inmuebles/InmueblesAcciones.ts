import {
    AGREGAR_INMUEBLE,
    EDITAR_INMUEBLE,
    LISTAR_INMUEBLES,
    TiposAccionesInmueble
} from './InmueblesTiposAcciones';
import { Inmueble } from '../../../../feature/Inmuebles/models/Inmueble';
import { InmuebleRepositorio } from '../../../api/inmuebles.repositorio';

export function listarInmuebles(
    inmuebles: Inmueble[],
    cantidadTotalInmuebles: number
): TiposAccionesInmueble {
    return {
        type: LISTAR_INMUEBLES,
        payload: inmuebles,
        cantidadTotalInmuebles,
    };
}

export function agregarNuevoInmueble(
    inmueble: Inmueble
): TiposAccionesInmueble {
    return {
        type: AGREGAR_INMUEBLE,
        payload: inmueble,
    };
}

export function editarInmueble(inmueble: Inmueble): TiposAccionesInmueble {
    return {
        type: EDITAR_INMUEBLE,
        payload: inmueble,
    };
}

export function listarInmueblesAsync(numeroPagina: number) {
    return function (dispacth: any) {
        InmuebleRepositorio.consultarPorPagina(
            numeroPagina
        ).then((respuesta: any) => {
            dispacth(listarInmuebles(respuesta.data, 2))
        }
        );
    };
}

export function agregarNuevoInmuebleAsync(inmueble: Inmueble) {
    return function (dispacth: any) {
        InmuebleRepositorio.crearInmueble(inmueble).then(() => {
            dispacth(listarInmueblesAsync(0))
        }
        ).catch(err => {
            console.log(err);
        });
    };
}