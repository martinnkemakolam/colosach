import { minusSvg, plusSvg} from "../svgModules";
export default function SwatchBtn({color}) {
    return(
        <button type="button" className="swatch" style={{background: color}}>
            { color ? 
            <div>
                {minusSvg}
            </div>
            :
            <div>
                {plusSvg}
            </div>}
        </button>
    )
}