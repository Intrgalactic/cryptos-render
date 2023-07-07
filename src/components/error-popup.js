import warning from 'assets/images/warning.png';

export function ErrorPopup({errReason,errDescription}) {
    return (
        <div className="error-popup">
            <img src={warning} alt="warning"/>
            <div className="error-popup__reason">
            <h3>{errReason}</h3>
            <p>{errDescription}</p>
            </div>
        </div>
    )
}