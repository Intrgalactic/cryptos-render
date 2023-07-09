import footerShape from 'assets/images/footer-shape.png';
import logo from 'assets/images/logo.png';
import webpLogo from 'assets/images/logo.webp';
import { Picture } from 'components/picture';
import { Suspense, lazy } from 'react';

const FooterLinks = lazy(() => import("components/footer-links").then(module => {
    return { default: module.FooterLinks }
}))

const CompaniesLogos = lazy(() => import("components/companies-logos").then(module => {
    return { default: module.CompaniesLogos }
}))

export default function Footer() {
    return (
        <>
            <img src={footerShape} alt="footer shape" className="footer-shape" width="100%" height="100%"></img>
            <footer>
                <Picture images={[logo, webpLogo]}>
                    <img src={webpLogo} alt="cryptos logo" />
                </Picture>
                <div className="footer__links">
                    <Suspense fallback={<p>Loading...</p>}>
                        <FooterLinks column="first column" links={["first page", "second page", "third page", "fourth page"]} />
                        <FooterLinks column="second column" links={["fourth page", "fifth page", "sixth page", "seventh page"]} />
                        <FooterLinks column="third column" links={["eight page", "nineth page", "tenth page", "eleventh page"]} />
                    </Suspense>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <CompaniesLogos />
                </Suspense>
                <h3>© 2019-2023 Cryptos All Rights Reserved</h3>
            </footer>
        </>
    )
}