import { combineReducers } from 'redux';
import productos from './productos/productosReductor';
import inmuebles from './inmuebles/inmueblesReductor';

export default combineReducers({ productos, inmuebles });
