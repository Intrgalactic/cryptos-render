import companyStar from 'assets/images/company-star.png';
import webpCompanyStar from 'assets/images/company-star.webp';
import { motion } from 'framer-motion';
import { Picture } from './picture';
const rotateVariants = {
    visible: {
        rotate: 360,
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "linear",
        }
    },

}
export function CompaniesStars() {
    return (
        <div className="companies-bar__stars" >
            <Picture images={[companyStar,webpCompanyStar]}>
                <motion.img src={webpCompanyStar} alt="company-star" variants={rotateVariants} animate="visible" loading='lazy' />
            </Picture>
            <Picture images={[companyStar,webpCompanyStar]}>
                <motion.img src={webpCompanyStar} alt="company-star" variants={rotateVariants} animate="visible" loading='lazy' />
            </Picture>
            <Picture images={[companyStar,webpCompanyStar]}>
                <motion.img src={webpCompanyStar} alt="company-star" variants={rotateVariants} animate="visible" loading='lazy' />
            </Picture>
        </div>
    )
}