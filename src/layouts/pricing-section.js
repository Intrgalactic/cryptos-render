import basic from 'assets/images/basic.png';
import standard from 'assets/images/standard.png';
import premium from 'assets/images/premium.png';
import { SectionHeading } from 'components/section-heading';
import { PricingBox } from 'components/pricing-box';
import { SectionHeadingDescription } from 'components/section-heading-description';
import { MoveArrows } from 'components/move-arrows';
import { useRef } from 'react';

export default function PricingSection() {
    const pricingRef = useRef();
    return (
        <>
            <SectionHeading heading={["don't hestitate while you can earn"]} />
            <section className="pricing">
                <div className="pricing__records" ref={pricingRef}>
                    <PricingBox image={basic} alt="basic package" abilities={["ACCESS TO MARKET", "LEVERAGE ACCESS", "BASIC CHARTS"]} type="basic" />
                    <PricingBox image={standard} alt="standard package" abilities={["ACCESS TO LAUNCHPAD", "CHAT WITH MEMBERS", "LOW CHART DELAY"]} type="standard" />
                    <PricingBox image={premium} alt="premium package" abilities={["LOWEST DELAY", "CHAT WITH ANALYSTS", "PREMIUM CHARTS"]} type="premium" />
                </div>
                <MoveArrows ref={pricingRef} />
            </section>
        </>
    )
}