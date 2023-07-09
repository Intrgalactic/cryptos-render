
import check from 'assets/images/checkbox.png';
import webpCheck from 'assets/images/checkbox.webp';
import { CtaBtn } from './cta-btn';
import { CustomBtn } from './custom-btn';
import { Picture } from './picture';

export function PricingBox({ images, alt, abilities, type }) {
    return (
        <div className="pricing__box">
            <Picture images={images}>
                <img src={images[0]} alt={alt} className="subscription-level" loading="lazy" />
            </Picture>
            <h3 className="pricing__subscription-type">{type}</h3>
            <div className="pricing__box-abilities">
                {abilities.map((ability, index) => (
                    <div className="pricing__box-abilities-record" key={index}>
                        <Picture images={[check, webpCheck]}>
                            <img src={check} alt="checkbox" loading="lazy" />
                        </Picture>
                        <p className="pricing__ability">{ability}</p>
                    </div>
                ))}
            </div>
            <CustomBtn btnText="buy" redirect="/buy" />
        </div>
    )
}