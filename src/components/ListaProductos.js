import React,{useState,useEffect} from 'react';  
import { useHistory } from "react-router-dom";
import { productoServicio } from '../services/productoServicio';

const ListaProductos = () => {
    const [todos, setTodos] = useState([]);
    //const [modal, setModal] = useState(false);
    let history = useHistory();

    const seleccionarCategoria=(categ, caso)=>{
        //setModal(true); 
        //history.push("/Formis/" + categ.id );
        history.push("/ModificarProducto?id=" + categ.id );
        //(caso==='Editar')?setModalEditar(true):setModalEliminar(true)
        console.log(categ);
    }

    useEffect(() => {
       productoServicio.getTodosLosProductos().then(datos=>setTodos(datos))
    }, []);

    return (
        <div>
            {
            //<ModalCategoria show={modal} />
            }
          
            <table className="table">
                <thead>
                    <tr>
                        <td>ID</td><td>Nombre</td><td>Precio</td>
                    </tr>
                </thead>
                <tbody>
                {   
                    todos.map((prod) => {
                        return <tr key={prod.id}>
                                <td> {prod.id}</td>
                                <td> {prod.nombre}</td>
                                <td>{prod.precio}</td>
                                <td><button  className="btn btn-primary" 
                                    onClick={()=>seleccionarCategoria(prod, 'Editar')}>Editar</button>
                                </td>
                            </tr>
                    }) 
                }
                </tbody>
            </table>
        </div>
    )
}

export default ListaProductos
