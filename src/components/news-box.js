import { motion } from "framer-motion"
import { fadeInVariants } from "layouts/testimonials"

export function NewsBox({image,alt,heading,description}) {
    return (
        <motion.div className="news__box" variants={fadeInVariants} animate="visible" initial="hidden">
            <img src={image} alt={alt}/>
            <h2>{heading}</h2>
            <p>{description}</p>
        </motion.div>
    )
}