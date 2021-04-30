import {
    editarInmueble,
    listarInmueblesAsync,
    agregarNuevoInmuebleAsync
} from '../../../core/redux/acciones/inmuebles/InmueblesAcciones';
import { EstadoGeneral } from '../../../core/redux/modelo/EstadoGeneral';
import { GestionInmuebles } from '../containers/GestionInmueble';
import { connect } from 'react-redux';

const mapStateToProps = (state: EstadoGeneral) => {
    return state.inmuebles;
};

export const ProveedorGestionInmuebles = connect(mapStateToProps, {
    listarInmuebles: listarInmueblesAsync,
    agregarNuevoInmueble: agregarNuevoInmuebleAsync,
    editarInmueble,
})(GestionInmuebles);
