import { useState } from "react"

export let TextSwitch=()=>{
    let [value, setValue] = useState(0)
    let text = ['moodboards', 'Inspiration', 'style guides']
    let changeText=()=>{
        if (value > 3) {
               setValue(0)
               return
        }
        setValue(value++)
    }
    return <span>{text[value]}</span>
}