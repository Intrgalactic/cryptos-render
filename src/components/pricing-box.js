
import check from 'assets/images/checkbox.png';
import { CtaBtn } from './cta-btn';
import { CustomBtn } from './custom-btn';

export function PricingBox({ image, alt, abilities, type }) {
    return (
        <div className="pricing__box">
            <img src={image} alt={alt} className="subscription-level" />
            <h3 className="pricing__subscription-type">{type}</h3>
            <div className="pricing__box-abilities">
                {abilities.map((ability, index) => (
                    <div className="pricing__box-abilities-record" key={index}>
                        <img src={check} alt="checkbox" />
                        <p className="pricing__ability">{ability}</p>
                    </div>
                ))}
            </div>
            <CustomBtn btnText="buy" redirect="/buy" />
        </div>
    )
}