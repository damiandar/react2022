import React,{useState} from 'react'
import { Fragment } from 'react/cjs/react.production.min'

const RadioClasificacion = ({register}) => { 
    const [clasificaciones]=useState([
        {id:"A",valor:"Primera"},
        {id:"B",valor:"Segunda"},
        {id:"C",valor:"Tercera"},
    ])
    return (
        <Fragment  >
            {
            clasificaciones.map(clasi=>(
                <div className="form-check form-check-inline"  key={clasi.id} >
                    <input  type="radio" className="form-check-input" value={clasi.id} {...register('clasificacion')} name="clasificacion" />
                    <label  className="form-check-label">{clasi.valor} </label>
                </div>
            )
            )
            }
        </Fragment>
    )
}

export default RadioClasificacion
