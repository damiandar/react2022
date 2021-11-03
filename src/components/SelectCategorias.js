import React,{useState} from 'react'

const SelectCategorias = ({register,categoriaid}) => {
 
    const [categorias]=useState([
        { id:1,descripcion:"electro"},
        { id:2,descripcion:"computadoras"},
    ])
    return (
        <div>
        {categoriaid} 
        <select className="form-control" value={categoriaid}  {...register('categoriaid')} >
            <option value="0">Seleccione una categoria</option>
            {
                categorias.map(cat=>(
                    <option key={cat.id} value={cat.id}>
                        {cat.descripcion}
                    </option>
                ))
            }
        </select>
        </div>
    )
}

export default SelectCategorias
