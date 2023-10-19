import {useEffect, useRef, useState } from "react";
import Button from "./presentation/Button";
import { Form } from "./container/form";
import { TextSwitch } from "./presentation/textSwitch";
import {colContext} from "./context"
import './style.css'
export default function App(){
    let sectionRef = useRef()
    let [color, setColor]= useState('')
    let copyImgSvg = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.25 4H2.5C2.30109 4 2.11032 4.07902 1.96967 4.21967C1.82902 4.36032 1.75 4.55109 1.75 4.75V13.5C1.75 13.6989 1.82902 13.8897 1.96967 14.0303C2.11032 14.171 2.30109 14.25 2.5 14.25H11.25C11.4489 14.25 11.6397 14.171 11.7803 14.0303C11.921 13.8897 12 13.6989 12 13.5V4.75C12 4.55109 11.921 4.36032 11.7803 4.21967C11.6397 4.07902 11.4489 4 11.25 4ZM10.5 12.75H3.25V5.5H10.5V12.75ZM14.25 2.5V11.25C14.25 11.4489 14.171 11.6397 14.0303 11.7803C13.8897 11.921 13.6989 12 13.5 12C13.3011 12 13.1103 11.921 12.9697 11.7803C12.829 11.6397 12.75 11.4489 12.75 11.25V3.25H4.75C4.55109 3.25 4.36032 3.17098 4.21967 3.03033C4.07902 2.88968 4 2.69891 4 2.5C4 2.30109 4.07902 2.11032 4.21967 1.96967C4.36032 1.82902 4.55109 1.75 4.75 1.75H13.5C13.6989 1.75 13.8897 1.82902 14.0303 1.96967C14.171 2.11032 14.25 2.30109 14.25 2.5Z" fill="white"/>
    </svg>
    let moreLikeThisSvg = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.0306 9.53063L8.5306 14.0306C8.46092 14.1005 8.37813 14.156 8.28696 14.1939C8.1958 14.2317 8.09806 14.2512 7.99935 14.2512C7.90064 14.2512 7.8029 14.2317 7.71173 14.1939C7.62057 14.156 7.53778 14.1005 7.4681 14.0306L2.9681 9.53063C2.8272 9.38973 2.74805 9.19863 2.74805 8.99938C2.74805 8.80012 2.8272 8.60902 2.9681 8.46813C3.10899 8.32723 3.30009 8.24807 3.49935 8.24807C3.69861 8.24807 3.8897 8.32723 4.0306 8.46813L7.24997 11.6875V2.5C7.24997 2.30109 7.32899 2.11032 7.46964 1.96967C7.61029 1.82902 7.80106 1.75 7.99997 1.75C8.19888 1.75 8.38965 1.82902 8.5303 1.96967C8.67095 2.11032 8.74997 2.30109 8.74997 2.5V11.6875L11.9693 8.4675C12.1102 8.3266 12.3013 8.24745 12.5006 8.24745C12.6999 8.24745 12.891 8.3266 13.0318 8.4675C13.1727 8.6084 13.2519 8.79949 13.2519 8.99875C13.2519 9.19801 13.1727 9.3891 13.0318 9.53L13.0306 9.53063Z" fill="white"/>
    </svg>
    var randomRgbColor = () => {
        const r = Math.floor(Math.random() * 200);
        const g = Math.floor(Math.random() * 200);
        const b = Math.floor(Math.random() * 200);
        document.querySelector(":root").style.setProperty('--ChangeCol', `rgba(${r}, ${g}, ${b}, ${1})`)

        return `rgba(${r}, ${g}, ${b}, ${1})`;
    };
    useEffect(()=>{
        const buildRgb = (imageData) => {
            const rgbValues = [];
            for (let i = 0; i < imageData.length; i += 4) {
              const rgb = {
                r: imageData[i],
                g: imageData[i + 1],
                b: imageData[i + 2],
              };
              rgbValues.push(rgb);
            }
            return rgbValues;
          };
        setColor(randomRgbColor())
        let canvas = document.getElementById('canvas')
        let ctx = canvas.getContext("2d")
        let image = new Image()
        image.src = './asset/pexels.jpg'
        image.onload = ()=>{
            canvas.width = image.width
            canvas.height = image.height
            ctx.drawImage(image, 0 , 0)
            let data = ctx.getImageData(0, 0, canvas.clientWidth, canvas.clientHeight)
            let arrCol = buildRgb(data.data)
            console.log(arrCol)
        }
    }, [])

    // let fetcher =()=>{
    //     fetch("https://colosach.onrender.com/pexels", {
    //             method: "POST",
    //             mode: 'no-cors',
    //             body: JSON.stringify({
    //                 "color": "blue",
    //                 "name": "boy"
    //             })
    //         }).then((res)=>{
    //             console.log(res)
    //             return res.body
    //         })
    //         .then((body)=> console.log(body))
    // }
    // fetcher()
    return (
        <colContext.Provider value={{color, setColor}}>
            <section ref={sectionRef}>
                <div className="logo" style={{background: color}}>
                    <img src="/asset/logo.png" alt="colosach logo"/>
                </div>
                <div className="contentLeft">
                    <div>
                        <h1 className="contentLeftText">Instantly curate <br/> <TextSwitch/> with color <br/> based search</h1>
                    </div>
                    <div className="caption">
                        <p className="contentLeftText">
                            Image alt text or description. View more like this produces images with same tags.
                            <br/>
                            Created by <span className="contentLeftText2">Author’s Name</span>
                        </p>
                        <Button className={'clearButton'} text={`Copy image`} svg={copyImgSvg}/>
                        <Button className={'clearButton'} text={`View more like this`} svg={moreLikeThisSvg}/>
                    </div>
                </div>
                <Form/>
            </section>
        </colContext.Provider>
    )
}