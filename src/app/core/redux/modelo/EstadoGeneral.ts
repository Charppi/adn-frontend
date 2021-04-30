import { EstadoProducto } from './EstadoProducto';
import { EstadoInmueble } from './EstadoInmueble';

export interface EstadoGeneral {
  productos: EstadoProducto;
  inmuebles: EstadoInmueble;
}
