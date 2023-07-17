
export function DetailsContainer({ heading, dataArr, image, alt }) {
    return (
        <>
            <div className="data-main-details">
                <img src={image} alt={alt} loading="lazy" width="70px" height="70px" />
                <h2>{heading}</h2>
            </div>
            <div className="data-specific-details-container">
                {dataArr.map(record => (
                    <div className="data-specific-details">
                        {record.map((r) => (
                            <p>{r}</p>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}