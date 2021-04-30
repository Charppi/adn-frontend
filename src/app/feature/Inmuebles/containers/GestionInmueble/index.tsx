import * as PropTypes from 'prop-types';
import * as React from 'react';

import { FormCrearInmueble } from '../../components/FormCrearInmueble';
import { ListaInmuebles } from '../../components/ListarInmuebles';

import { Inmueble } from '../../models/Inmueble';
import { useEffect } from 'react';

interface GestionInmueblesProps {
    inmuebles: Array<Inmueble>;
    listarInmuebles: (numeroPagina: number) => void;
    agregarNuevoInmueble: (inmueble: Inmueble) => void;
    editarInmueble: (inmueble: Inmueble) => void;
    cantidadTotalInmueble: number;
}

export const GestionInmuebles: React.FC<GestionInmueblesProps> = ({
    inmuebles,
    agregarNuevoInmueble,
    listarInmuebles,
    editarInmueble,
    // cantidadTotalInmueble,
}) => {

    useEffect(() => {
        console.log({ inmuebles });
    }, [inmuebles])

    useEffect(() => {
        listarInmuebles(0);
    }, [listarInmuebles]);
    return <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "45%" }}>
            <FormCrearInmueble
                onSubmit={agregarNuevoInmueble}
                formTitle="Crear inmueble"
            />
        </div>
        <div style={{ width: "45%" }}>
            <ListaInmuebles
                inmuebles={inmuebles}
                onClickEditarInmueble={editarInmueble}
            />
        </div>
    </div>
};

GestionInmuebles.propTypes = {
    inmuebles: PropTypes.array.isRequired,
    listarInmuebles: PropTypes.func.isRequired,
    agregarNuevoInmueble: PropTypes.func.isRequired,
    editarInmueble: PropTypes.func.isRequired,
    cantidadTotalInmueble: PropTypes.number.isRequired,
};
