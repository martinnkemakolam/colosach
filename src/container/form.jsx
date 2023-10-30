import React, { useContext, useEffect, useRef, useState} from "react";
import { arrowUpRightSvg, arrowRightSvg, xSvg, eyeDropSvg } from "../svgModules";
import Button from "../presentation/Button";
import Input from "../presentation/Input";
import { Select } from "../presentation/select";
import SwatchBtn from "../presentation/swatchBtn";
import { colContext } from "../context";

export let Form=()=>{
    let {color, setColor} = useContext(colContext)
    let addAlpha =(col, opacity = 0.6)=>{
        let newString = col.slice(0, col.length-2)
        return newString + `${opacity})`
    }
    let canvasRef1 = useRef()
    let canvasRef2 = useRef()
    let canvasRef3 = useRef()

    let [ctrl1, setCtrl1] = useState({
        left: 0,
        top: 0
    })
    let [editable ,setEditable] = useState(false)
    useEffect(()=>{
        let ctx = canvasRef1.current.getContext('2d')
        let ctx2 = canvasRef2.current.getContext('2d')
        let ctx3 = canvasRef3.current.getContext('2d')
        
        let grd = ctx.createLinearGradient(0, 0, canvasRef1.current.width, canvasRef1.current.height)
        grd.addColorStop(0, 'rgb(255, 255, 255)')
        grd.addColorStop(0.3, 'rgb(255, 0, 0)')
        grd.addColorStop(0.9, 'rgb(0, 0, 0)')
        ctx.fillStyle = grd
        ctx.fillRect(0, 0, canvasRef1.current.width, canvasRef1.current.height)

        let gradient = ctx2.createLinearGradient(0,0,canvasRef2.current.width, 0)
        gradient.addColorStop(0, "rgb(255, 0, 0)");
        gradient.addColorStop(0.15, "rgb(255, 0, 255)");
        gradient.addColorStop(0.33, "rgb(0, 0, 255)");
        gradient.addColorStop(0.49, "rgb(0, 255, 255)");
        gradient.addColorStop(0.67, "rgb(0, 255, 0)");
        gradient.addColorStop(0.84, "rgb(255, 255, 0)");
        gradient.addColorStop(1, "rgb(255, 0, 0)");
        ctx2.fillStyle = gradient
        ctx2.fillRect(0, 0, canvasRef2.current.width, canvasRef2.current.height)


        let grd3 = ctx3.createLinearGradient(0, 0, canvasRef3.current.width, 0)
        grd3.addColorStop(0, "rgb(15, 15, 15)")
        grd3.addColorStop(0.5, "rgb(240, 240, 240)")
        ctx3.fillStyle = grd3
        ctx3.fillRect(0,0,canvasRef3.current.width, canvasRef3.current.height)


    }, [])
    return(
        <form className="form">
            <div className="swatchHolder">
                <SwatchBtn defaultCol={color}/>
                <SwatchBtn color={color}/>
                <SwatchBtn color={color}/>
                <SwatchBtn color={color}/>
                <SwatchBtn color={color}/>
                <div className="colorPicker">
                    <div className="canvasHolder" onMouseMove={()=> console.log('moved')}>
                        <canvas ref={canvasRef1} width={240} height={240}></canvas>
                        <div className="ctler" style={{left: '225px', top: '225px'}} onMouseDown={(e)=> setEditable(true)} onMouseUp={(e)=>{
                            setEditable(false)
                            console.log(ctrl1)
                            setCtrl1({
                                left: e.clientX,
                                top: e.clientY
                            })
                        }}>
                        </div>
                    </div>
                    <div className="canvasHolder">
                        <canvas ref={canvasRef2} width={240} height={24}></canvas>
                        <div className="ctler middle" style={{left: '225px'}}>
                        </div>
                    </div>
                    <div className="canvasHolder">
                        <canvas ref={canvasRef3} width={240} height={24}></canvas>
                        <div className="ctler middle" style={{left: '225px'}}>
                        </div>
                    </div>
                    <div className="model" style={{background: addAlpha(color, 0.1)}}>
                        <span className="hex" style={{color: addAlpha(color), opacity: 1}}>HEX</span>
                        <span className="hex active" style={{color: color}} >HSB</span>
                        <span className="hex" style={{color: addAlpha(color)}}>HSL</span>
                        <span className="hex" style={{color: addAlpha(color)}}>RGB</span>
                        <span className="hex" style={{color: addAlpha(color)}}>CSS</span>
                    </div>
                    <div className="detail">
                        <div className="details  h1 flex" style={{color: color, background: addAlpha(color, 0.1)}}>
                            200, 150, 200
                        </div>
                        <div className="details" style={{color: color, background: addAlpha(color, 0.1)}}>
                            100%
                        </div>
                        <div className="details" style={{color: color, background: addAlpha(color, 0.1)}}>
                            {eyeDropSvg}
                        </div>
                    </div>
                </div>
            </div>
            <Button color={color} className={`clearButton`} text={`Clear all inputs`} svg={xSvg}/>
            <div className="inputHolder">
                <Input placeholder={`Search term (leave empty for random images)`} />
                <Select placeholder={`Select sites to search images`}/>
                <Select placeholder={`Prefer single-color images`}/>
            </div>
            <div className="inputHolder">
                <Button background={true} color={color} className={`button`} text={`Search for images`} svg={arrowRightSvg}/>
                <Button borderCol={true} color={color} className={`button`} text={`Export palette`} svg={arrowUpRightSvg}/>
            </div>
            <p style={{color: addAlpha(color)}}>
            By using this platform, you agree to our <span style={{color: color}}>Terms and Conditions</span> and <span style={{color: color}}>Privacy Policy.</span>
            </p>
        </form>
    )
}