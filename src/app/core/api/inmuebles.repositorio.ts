import { Inmueble } from 'app/feature/Inmuebles/models/Inmueble';
import { axiosIntance } from '../config/AxiosConfig';

const NUMERO_REGISTROS = 10;
const limit = (count: number, p: number) =>
    `limit=${count}&offset=${p ? p * count : 0}`;

export const InmuebleRepositorio = {
    consultarPorPagina: (page: number) =>
        axiosIntance.get(`/inmuebles?${limit(NUMERO_REGISTROS, page)}`),
    crearInmueble: (inmueble: Inmueble) => axiosIntance.post("/inmuebles", inmueble)
};
