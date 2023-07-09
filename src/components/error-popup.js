import warning from 'assets/images/warning.png';
import webpWarning from 'assets/images/warning.webp';
import { Picture } from './picture';
export function ErrorPopup({errReason,errDescription}) {
    return (
        <div className="error-popup">
            <Picture images={[warning,webpWarning]}>
                <img src={warning} alt="warning" loading='lazy'/>
            </Picture>
            <div className="error-popup__reason">
            <h3>{errReason}</h3>
            <p>{errDescription}</p>
            </div>
        </div>
    )
}