import basic from 'assets/images/basic.png';
import standard from 'assets/images/standard.png';
import premium from 'assets/images/premium.png';
import webpBasic from 'assets/images/basic.webp';
import webpStandard from 'assets/images/standard.webp';
import webpPremium from 'assets/images/premium.webp';
import { useRef, lazy, Suspense } from 'react';

const PricingBox = lazy(() => import("components/pricing-box").then(module => {
    return { default: module.PricingBox }
}))
const MoveArrows = lazy(() => import("components/move-arrows").then(module => {
    return { default: module.MoveArrows }
}))

export default function PricingSection() {
    const pricingRef = useRef();
    return (
        <>
            <section className="pricing">
                <div className="pricing__records" ref={pricingRef}>
                    <Suspense fallback={<p>Loading...</p>}>
                        <PricingBox images={[basic,webpBasic]} alt="basic package" abilities={["ACCESS TO MARKET", "LEVERAGE ACCESS", "BASIC CHARTS"]} type="basic" />
                        <PricingBox images={[standard,webpStandard]} alt="standard package" abilities={["ACCESS TO LAUNCHPAD", "CHAT WITH MEMBERS", "LOW CHART DELAY"]} type="standard" />
                        <PricingBox images={[premium,webpPremium]} alt="premium package" abilities={["LOWEST DELAY", "CHAT WITH ANALYSTS", "PREMIUM CHARTS"]} type="premium" />
                    </Suspense>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <MoveArrows ref={pricingRef} />
                </Suspense>
            </section>
        </>
    )
}