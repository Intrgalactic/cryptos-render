import { CtaBtn } from "./cta-btn";
import { Picture } from "./picture";
import { SectionHeading } from "./section-heading";

export function WalletBenefitBox({ images, alt, heading, description, btnText }) {
    return (
        <div className="wallet__benefit-box">
            <Picture images={images}>
                <img src={images[1]} alt={alt} />
            </Picture>
            <SectionHeading heading={heading} />
            <p>{description}</p>
            <CtaBtn btnText={btnText} />
        </div>
    )
}