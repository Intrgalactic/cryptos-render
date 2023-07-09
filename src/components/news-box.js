import { motion } from "framer-motion"
import { fadeInVariants } from "layouts/testimonials"
import { Picture } from "./picture"

export function NewsBox({ images, alt, heading, description }) {
    return (
        <motion.div className="news__box" variants={fadeInVariants} animate="visible" initial="hidden">
            <Picture images={images}>
                <img src={images[0]} alt={alt} loading="lazy" />
            </Picture>
            <h2>{heading}</h2>
            <p>{description}</p>
        </motion.div>
    )
}