import footerShape from 'assets/images/footer-shape.png';
import logo from 'assets/images/logo.png';
import { CompaniesLogos } from 'components/companies-logos';
import { FooterLinks } from 'components/footer-links';

export default function Footer() {
    return (
        <>
            <img src={footerShape} alt="footer shape" className="footer-shape"></img>
            <footer>
                <img src={logo} alt="cryptos logo" />
                <div className="footer__links">
                    <FooterLinks column="first column" links={["first page", "second page", "third page","fourth page"]} />
                    <FooterLinks column="second column" links={["fourth page", "fifth page", "sixth page", "seventh page"]} />
                    <FooterLinks column="third column" links={["eight page", "nineth page", "tenth page", "eleventh page"]} />
                </div>
                <CompaniesLogos/>
                <h3>© 2019-2023 Cryptos All Rights Reserved</h3>
            </footer>
        </>
    )
}