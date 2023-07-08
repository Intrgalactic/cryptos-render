import warning from 'assets/images/warning.png';
export function LockedBox({children}) {
    return (
        <div className="locked-box">
            <img src={warning} alt="warning" loading='lazy'/>
            <p>Please connect your wallet</p>
            {children}
        </div>
    )
}