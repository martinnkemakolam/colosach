import { useEffect, useState } from "react"

export let TextSwitch=()=>{
    let [value, setValue] = useState(0)
    let text = ['moodboards', 'Inspiration', 'style guides']
    useEffect(()=>{
        let changeText=()=>{
            if (value === 3) {
                setValue(0)
                return
            }
            setValue(value++)
        }
        let interval = setInterval(()=>{
            changeText()
        }, 3000)
        return(()=>{
            clearInterval(interval)
        })
    }, [value])
    return <span className="contentLeftText2">{text[value]}</span>
}