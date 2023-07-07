import blockchaincom from 'assets/images/blockchaincom.png';
import fireblocks from 'assets/images/fireblocks.png';
import dapper from 'assets/images/dapper.png';
import opensea from 'assets/images/opensea.png';
import { Link } from 'react-router-dom';

export function CompaniesLogos() {
    return (
        <div className="companies-bar__logos">
            <Link to="https://blockchain.com"><img src={blockchaincom} alt="blockchain.com logo" /></Link>
            <Link to="https://fireblocks.com"><img src={fireblocks} alt="fireblocks logo" /></Link>
            <Link to="https://dapper.com"><img src={dapper} alt="dapper logo" /></Link>
            <Link to="https://opensea.com"><img src={opensea} alt="opensea logo" /></Link>
        </div>
    )
}