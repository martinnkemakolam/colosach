export default function Button({text, svg, className, color, background, borderCol}) {
    return(
        <button className={className} style={{color: background ? "#fff":color, border: borderCol ? `1px solid ${color}` : 'none', background: background ? color : ''}}>
            <p>{text}</p>
            <div>
            {svg}
            </div>
        </button>
    )
}