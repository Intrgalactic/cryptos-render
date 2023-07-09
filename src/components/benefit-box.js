import { motion } from "framer-motion"
import { CtaBtn } from "./cta-btn"
import { Picture } from "./picture"
export function BenefitBox({ images, alt, heading, description, btnText, action }) {
    return (
        <motion.div className="benefit-box" whileHover={{ scale: 1.1 }}>
            <Picture images={images}>
                <img src={images[0]} alt={alt} className="benefit-box__image" loading="lazy" />
            </Picture>
            <h1 className="benefit-box__heading">{heading}</h1>
            <p className="benefit-box__description">{description}</p>
            {btnText ? <CtaBtn btnText={btnText} action={action} /> : null}
        </motion.div>
    )
}