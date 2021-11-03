import React,{useState} from 'react'

const SelectVendedores = ({register,vendedorid}) => {
    const [categorias]=useState([
        { id:1,nombre:"Romina Lopez"},
        { id:2,nombre:"Laura Alonso"},
        { id:1003,nombre:"Juan Perez"},
    ])
    return (
        <div>
            {vendedorid}
             <select className="form-control"  value={vendedorid} {...register('vendedorid')} >
                 <option value="0">Seleccione un vendedor</option>
            {
                categorias.map(vende=>(
                    <option key={vende.id} value={vende.id}>
                        {vende.nombre}
                    </option>
                ))
            }
        </select>
        </div>
    )
}

export default SelectVendedores
