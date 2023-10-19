import { useContext, useRef} from "react";
import { arrowUpRightSvg, arrowRightSvg, xSvg } from "../svgModules";
import Button from "../presentation/Button";
import Input from "../presentation/Input";
import { Select } from "../presentation/select";
import SwatchBtn from "../presentation/swatchBtn";
import { colContext } from "../context";
import { useEffect } from "react/cjs/react.production.min";

export let Form=()=>{
    let {color, setColor} = useContext(colContext)
    let addAlpha =(col)=>{
        let newString = col.slice(0, col.length-2)
        return newString + ' 0.64)'
    }
    let canvasRef1 = useRef()
    useEffect(()=>{
        let ctx = canvasRef1.current.getContext('2d')
    }, [])
    return(
        <form className="form">
            <div className="swatchHolder">
                <SwatchBtn defaultCol={color}/>
                <SwatchBtn color={color}/>
                <SwatchBtn color={color}/>
                <SwatchBtn color={color}/>
                <SwatchBtn color={color}/>
                <div>
                    <canvas ref={canvasRef1} width={240} height={240}></canvas>
                    <canvas width={240} height={24}></canvas>
                    <canvas width={240} height={24}></canvas>
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