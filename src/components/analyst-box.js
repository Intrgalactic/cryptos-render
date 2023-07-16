
export function Analyst({image,alt,name}) {
    return (
        <div className="analyst">
            <img src={image} alt={alt} loading="lazy" width="70px" height="70px"/>
            <p>{name}</p>
        </div>
    )
}