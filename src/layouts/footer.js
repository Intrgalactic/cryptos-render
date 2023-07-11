import footerShape from 'assets/images/footer-shape.png';
import pricingFooterShape from 'assets/images/pricing-footer-shape.png';
import webpFooterShape from 'assets/images/footer-shape.webp';
import webpPricingFooterShape from 'assets/images/pricing-footer-shape.webp';
import logo from 'assets/images/logo.png';
import webpLogo from 'assets/images/logo.webp';
import { Picture } from 'components/picture';
import { Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';

const FooterLinks = lazy(() => import("components/footer-links").then(module => {
    return { default: module.FooterLinks }
}))

const CompaniesLogos = lazy(() => import("components/companies-logos").then(module => {
    return { default: module.CompaniesLogos }
}))

export default function Footer() {
    const location = useLocation();
    const path = location.pathname;
    console.log(path === "/pricing");
    return (
        <>
            <Picture images={path === "pricing" ? [pricingFooterShape, webpPricingFooterShape] : [footerShape, webpFooterShape]}>
                <img src={path === "/pricing" ? pricingFooterShape : footerShape} alt="footer shape" className="footer-shape" width="100%" height="100%" loading='lazy'></img>
            </Picture>

            <footer>
                <Picture images={[logo, webpLogo]}>
                    <img src={logo} alt="cryptos logo" width="30%" height="170px" />
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