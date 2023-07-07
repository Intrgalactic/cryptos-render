
export function CtaBtn({btnText,action}) {
    return (
        <button className="cta-btn" onClick={action}>{btnText}</button>
    )
}