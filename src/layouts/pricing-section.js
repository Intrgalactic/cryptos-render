import basic from 'assets/images/basic.png';
import standard from 'assets/images/standard.png';
import premium from 'assets/images/premium.png';
import { SectionHeading } from 'components/section-heading';
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
            <SectionHeading heading={["don't hestitate while you can earn"]} />
            <section className="pricing">
                <div className="pricing__records" ref={pricingRef}>
                    <Suspense fallback={<p>Loading...</p>}>
                        <PricingBox image={basic} alt="basic package" abilities={["ACCESS TO MARKET", "LEVERAGE ACCESS", "BASIC CHARTS"]} type="basic" />
                        <PricingBox image={standard} alt="standard package" abilities={["ACCESS TO LAUNCHPAD", "CHAT WITH MEMBERS", "LOW CHART DELAY"]} type="standard" />
                        <PricingBox image={premium} alt="premium package" abilities={["LOWEST DELAY", "CHAT WITH ANALYSTS", "PREMIUM CHARTS"]} type="premium" />
                    </Suspense>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <MoveArrows ref={pricingRef} />
                </Suspense>
            </section>
        </>
    )
}