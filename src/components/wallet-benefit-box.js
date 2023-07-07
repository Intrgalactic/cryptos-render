import { CtaBtn } from "./cta-btn";
import { SectionHeading } from "./section-heading";

export function WalletBenefitBox({image,alt,heading,description,btnText}) {
    return (
        <div className="wallet__benefit-box">
            <img src={image} alt={alt}/>
            <SectionHeading heading={heading}/>
            <p>{description}</p>
            <CtaBtn btnText={btnText}/>
        </div>
    )
}