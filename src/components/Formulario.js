import React from 'react'
import { useForm } from 'react-hook-form';

const Formulario = () => {
    const {register, handleSubmit,  formState: { errors }}= useForm();
    const enviar= (data)=>{
        console.log(data);
    }
    return (
         
        <form onSubmit={handleSubmit(enviar)}>
        <div className="form-input">
            <label>Id</label> 
            <input className="form-control"  type="text" {...register("id")}  />
        </div>
        <div className="form-input">
            <label>Descripción</label>
            <input className={`form-control ${errors.descripcion && 'is-invalid' }`} name="descripcion" type="text" {...register("descripcion", { required: true, maxLength: 20 })}  />
            {errors.descripcion && (<p>Error en la descripción</p>) }
        </div>
        <div className="form-input"> 
            <button type="submit" className="btn btn-success" >Guardar</button>
        </div>
    </form> 
    )
}

export default Formulario
