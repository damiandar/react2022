import React,{useEffect,useState} from 'react' 
import { useForm,Controller } from 'react-hook-form'; 
import RadioClasificacion from './RadioClasificacion';
import SelectCategorias from './SelectCategorias';
import SelectVendedores from './SelectVendedores';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation,useHistory } from 'react-router';
import { productoServicio } from '../services/productoServicio';
import { Link } from 'react-router-dom';
 

const FormProducto = () => {

    function useQuery(){
        return new URLSearchParams(useLocation().search);
    }
    let query =useQuery();
    let history=useHistory();
    var id=query.get("id");
    const Agregando=!id;
    const [producto, setProducto] = useState({});

    useEffect(() => {
       
        if(!Agregando){
            productoServicio.getPorIdProducto(id).then(producto=>{
                const fields = ['nombre', 'precio', 'stock', 'categoriaid', 'vendedorid','fechamodificacion','clasificacion','habilitado'];
                fields.forEach(field => setValue(field, producto[field]));
                setProducto(producto);
                console.log(producto);
            })
        } 
    }, []);

    const {register,control,setValue, handleSubmit,  formState: { errors }}= useForm();
 
    const enviar= (data)=>{
        console.log(data);
        const prod={
            nombre:data.nombre,
            precio:data.precio,
            stock:data.stock,
            categoriaid:data.categoriaid,
            vendedorid: data.vendedorid,
            fechamodificacion:data.FechaModificacion,
            clasificacion:data.clasificacion,
            habilitado:data.habilitado
        };
        if(Agregando){
            productoServicio.crearProducto(prod)
                .then(()=>{
                    history.push('.');
                })
                .catch(console.log("error al crear"));
        }
        else{
            prod.id=id; 
            productoServicio.modificarProducto(prod)
                .then(()=>{
                    history.push('.');
                })
        }
        /*      body: JSON.stringify({
                nombre: Nombre,
                stock:Stock,
            }), 
            body: JSON.stringify(data),
            */
            
         
        
    }

    return (
        
        <form onSubmit={handleSubmit(enviar)}> 
        <h1>Agregar</h1>
        <div className="form-input">
            <label>Id</label> 
            <input className="form-control"  type="text" {...register("id")}  />
        </div>
        <div className="form-input">
            <label>Descripción</label>
            <input className={`form-control ${errors.nombre && 'is-invalid' }`} name="nombre" type="text" {...register("nombre", { required: true, maxLength: 20 })}  />
            {errors.nombre && (<p>Error en la descripción</p>) }
        </div>
        <div className="form-input">
            <label>Stock</label> 
            <input className="form-control"  type="text" {...register("stock")}  />
        </div>
        <div className="form-input">
            <label>Precio</label> 
            <input className="form-control"  type="text" {...register("precio")}  />
        </div>
        <div className="form-input">
            <label>Categoria</label> 
            <SelectCategorias categoriaid={producto.categoriaId}  register={register}/>
        </div>
        <div className="form-input">
            <label>Vendedor</label> 
            <SelectVendedores vendedorid={producto.vendedorId} register={register} />
        </div>
        <div className="form-input">
        <label className="form-control">
            <input type="checkbox"  {...register('habilitado')}   />
            Habilitado
        </label>
        </div>
        <div className="form-input">
            <label className="form-control">Clasificación: </label>
            <RadioClasificacion register={register} />
        </div>
        <label>Fecha Modificacion</label>
        <Controller className="form-control"
        control={control}
        name="FechaHabilitacion"
        render={({ field: { onChange, onBlur, value, ref } }) => (
            
          <ReactDatePicker className="form-control" dateFormat="yyyy/MM/dd"
            onChange={onChange}
            onBlur={onBlur}
            selected={value}
          />
        )}
      />
        <div className="form-input"> 
            <button type="submit" className="btn btn-success" >Guardar</button>
            <Link to={Agregando ? '.' : '..'} className="btn btn-link">Cancelar</Link>
        </div> 

        </form> 
    )
}

export default FormProducto
