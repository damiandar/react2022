import React,{useState} from 'react'

const CheckHabilitado = ( ) => {
    const [checked, setChecked] = useState(true)
    return (
        <label>
            <input type="checkbox" checked={checked} onChange={()=>setChecked(!checked) }   />
            Habilitado { (checked && <h2>Fue true</h2>)}
        </label>
    )
}

export default CheckHabilitado
