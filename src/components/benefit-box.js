import { motion } from "framer-motion"
import { CtaBtn } from "./cta-btn"
export function BenefitBox({image,alt,heading,description,btnText,action}) {
    return (
        <motion.div className="benefit-box" whileHover={{scale:1.1}}>
            <img src={image} alt={alt} className="benefit-box__image"/>
            <h1 className="benefit-box__heading">{heading}</h1>
            <p className="benefit-box__description">{description}</p>
            {btnText ? <CtaBtn btnText={btnText} action={action}/> : null}
        </motion.div>
    )
}