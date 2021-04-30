import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Inmueble } from '../../models/Inmueble';

export interface ListaInmueblesProps {
    inmuebles: Inmueble[];
    onClickEditarInmueble: (inmueble: Inmueble) => void;
}

const styles = {
    table: {
        fontFamily: "arial, sans- serif",
        bordeCollapse: "collapse",
        width: "100%"
    },
    tdYth: {
        border: "1px solid #dddddd",
        textAlign: "left",
        padding: "8px"
    }
}

export const ListaInmuebles: React.FC<ListaInmueblesProps> = ({
    inmuebles,
    onClickEditarInmueble,
}) => {
    return <div style={{ margin: "10px", padding: "10px", borderRadius: "10px", boxShadow: "5px 20px 30px 5px #ded3d3" }}>
        <table style={styles.table}>
            <thead>
                <tr>
                    <td>
                        <strong>Id</strong>
                    </td>
                    <td>
                        <strong>Direccion</strong>
                    </td>
                    <td>
                        <strong>Valor</strong>
                    </td>
                    <td>
                        <strong>Accion</strong>
                    </td>
                </tr>
            </thead>
            <tbody>
                {inmuebles && inmuebles.map((inmueble, k) => {
                    return <tr key={k}>
                        <td>{inmueble.id}</td>
                        <td>{inmueble.direccion}</td>
                        <td>{inmueble.valor}</td>
                        <td>
                            <button onClick={() => onClickEditarInmueble(inmueble)} style={{
                                padding: "10px",
                                width: "100%",
                                fontSize: "1rem",
                                fontWeight: "bold",
                                color: "#6ca264",
                                border: "none",
                                backgroundColor: "transparent",
                            }}>Editar</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
};

ListaInmuebles.propTypes = {
    inmuebles: PropTypes.array.isRequired,
    onClickEditarInmueble: PropTypes.func.isRequired,
};
