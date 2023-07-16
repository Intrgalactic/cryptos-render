
export function BalanceBoxPart({ heading, amount }) {
    return (
        <div className="balance-part">
            <div className="balance-part__heading">
                <p>{heading}</p>
            </div>
            <div className="balance-part__amount">
                {amount}
            </div>
        </div>
    )
}