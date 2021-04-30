import {
    AGREGAR_INMUEBLE,
    EDITAR_INMUEBLE,
    LISTAR_INMUEBLES,
    TiposAccionesInmueble
} from '../../acciones/inmuebles/InmueblesTiposAcciones';
import { EstadoInmueble } from '../../modelo/EstadoInmueble';
import { Inmueble } from '../../../../feature/Inmuebles/models/Inmueble';

const initialState: EstadoInmueble = {
    inmuebles: Array<Inmueble>(),
    cantidadTotalInmueble: 0,
};

export default function (
    state = initialState,
    action: TiposAccionesInmueble
): EstadoInmueble {
    switch (action.type) {
        case LISTAR_INMUEBLES: {
            const inmuebles = action.payload;
            return {
                ...state,
                inmuebles
            };
        }
        case AGREGAR_INMUEBLE: {
            const inmueble = action.payload;
            return {
                ...state,
                inmuebles: [...state.inmuebles, inmueble],
            };
        }

        case EDITAR_INMUEBLE: {
            const inmueble = action.payload;
            const index = state.inmuebles.findIndex(inmueble => inmueble.id === action.payload.id)
            const newArray = [...state.inmuebles]
            newArray[index] = inmueble
            return {
                ...state,
                inmuebles: newArray,
            };
        }

        default:
            return state;
    }
}
