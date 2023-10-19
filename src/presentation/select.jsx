import { useContext } from "react"
import { colContext } from "../context"

export let Select=({placeholder})=>{
    let {color} = useContext(colContext)
    return (
        <div className={`input`}>
            <select name="" style={{color: color}}>
                <option value={placeholder} selected style={{color: color}}>{placeholder}</option>
            </select>
        </div>
        
    )
}