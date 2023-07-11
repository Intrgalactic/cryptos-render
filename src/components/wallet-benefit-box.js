import { CtaBtn } from "./cta-btn";
import { Picture } from "./picture";
import { SectionHeading } from "./section-heading";

export function WalletBenefitBox({ images, alt, heading, description, btnText }) {
    return (
        <div className="wallet__benefit-box">
            <Picture images={images}>
                <img src={images[0]} alt={alt} width="70%" height="200px"/>
            </Picture>
            <SectionHeading heading={heading} />
            <p>{description}</p>
            <CtaBtn btnText={btnText} />
        </div>
    )
}