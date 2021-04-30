import * as PropTypes from 'prop-types';
import * as React from 'react';

import { FormCrearUsuario } from '../../components/FormCrearUsuario';
import { ListaUsuarios } from '../../components/ListarUsuarios';

import { Usuario } from '../../models/Usuario';
import { useEffect } from 'react';

interface GestionUsuariosProps {
    inmuebles: Array<Usuario>;
    listarUsuarios: (numeroPagina: number) => void;
    agregarNuevoUsuario: (inmueble: Usuario) => void;
    editarUsuario: (inmueble: Usuario) => void;
    cantidadTotalUsuario: number;
}

export const GestionUsuarios: React.FC<GestionUsuariosProps> = ({
    inmuebles,
    agregarNuevoUsuario,
    listarUsuarios,
    editarUsuario,
    // cantidadTotalUsuario,
}) => {

    useEffect(() => {
        console.log({ inmuebles });
    }, [inmuebles])

    useEffect(() => {
        listarUsuarios(0);
    }, [listarUsuarios]);
    return <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "45%" }}>
            <FormCrearUsuario
                onSubmit={agregarNuevoUsuario}
                formTitle="Crear inmueble"
            />
        </div>
        <div style={{ width: "45%" }}>
            <ListaUsuarios
                inmuebles={inmuebles}
                onClickEditarUsuario={editarUsuario}
            />
        </div>
    </div>
};

GestionUsuarios.propTypes = {
    inmuebles: PropTypes.array.isRequired,
    listarUsuarios: PropTypes.func.isRequired,
    agregarNuevoUsuario: PropTypes.func.isRequired,
    editarUsuario: PropTypes.func.isRequired,
    cantidadTotalUsuario: PropTypes.number.isRequired,
};
