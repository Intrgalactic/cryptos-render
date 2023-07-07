
export function BlockchainUserRecord({type,data}) {
    return (
        <div className="blockchain-user-record">
            <h2>{type} :</h2>
            <p>{data}</p>
        </div>
    )
}