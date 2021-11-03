import { FetchComercio } from "./FetchComercio";
import { apiUrl as api_url } from "../util/environment";

export const productoServicio={
    getTodosLosProductos,
    crearProducto,
    getPorIdProducto,
    modificarProducto,
};

const baseUrl= api_url + "productos";

function getTodosLosProductos(){
    return FetchComercio.get(baseUrl);
}
function getPorIdProducto(id){
    return FetchComercio.get(baseUrl + '/' + id );
}

function crearProducto(parametros){
    return FetchComercio.post(baseUrl,parametros);
}

function modificarProducto(parametros){
    return FetchComercio.put(baseUrl,parametros);
}