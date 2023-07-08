import { motion } from "framer-motion"
import { CtaBtn } from "./cta-btn"
import { LazyLoadImage } from "react-lazy-load-image-component"
export function BenefitBox({image,alt,heading,description,btnText,action}) {
    return (
        <motion.div className="benefit-box" whileHover={{scale:1.1}}>
            <LazyLoadImage src={image} alt={alt} className="benefit-box__image" loading="lazy"/>
            <h1 className="benefit-box__heading">{heading}</h1>
            <p className="benefit-box__description">{description}</p>
            {btnText ? <CtaBtn btnText={btnText} action={action}/> : null}
        </motion.div>
    )
}