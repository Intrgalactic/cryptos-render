import warning from 'assets/images/warning.png';
import webpWarning from 'assets/images/warning.webp';
import { Picture } from './picture';
export function LockedBox({ children }) {
    return (
        <div className="locked-box">
            <Picture images={[warning, webpWarning]}>
                <img src={webpWarning} alt="warning" loading='lazy' />
            </Picture>
            <p>Please connect your wallet</p>
            {children}
        </div>
    )
}