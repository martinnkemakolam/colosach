export let Select=({placeholder})=>{
    return (
        <select className={`input`} name="">
            <option value={placeholder} selected>{placeholder}</option>
        </select>
        
    )
}