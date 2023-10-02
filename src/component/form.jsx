import { useContext} from "react";
import { arrowUpRightSvg, arrowRightSvg, xSvg } from "../svgModules";
import Button from "./Button";
import Input from "./Input";
import { Select } from "./select";
import SwatchBtn from "./swatchBtn";
import { colContext } from "../context";

export let Form=()=>{
    let {color, setColor} = useContext(colContext)
    let addAlpha =(col)=>{
        let newString = col.slice(0, col.length-2)
        return newString + ' 0.64)'
    }
    return(
        <form className="form">
            <div className="swatchHolder">
                <SwatchBtn color={color}/>
                <SwatchBtn/>
                <SwatchBtn/>
                <SwatchBtn/>
                <SwatchBtn/>
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