import { minusSvg, plusSvg} from "../svgModules";
export default function SwatchBtn({defaultCol, color}) {
    return(
        <button type="button" className="swatch" style={{background: defaultCol, color: defaultCol ? "#fff" : color}}>
            { defaultCol ? 
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