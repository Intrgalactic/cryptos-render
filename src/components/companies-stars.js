import companyStar from 'assets/images/company-star.png';
import { motion } from 'framer-motion';
const rotateVariants = {
    visible: {
        rotate:360,
        transition: {
            duration: 2,
            repeat:Infinity,
            ease:"linear",
        }
    },
    
}
export function CompaniesStars() {
    return (
        <div className="companies-bar__stars" >
            <motion.img src={companyStar} alt="company-star" variants={rotateVariants} animate="visible"/>
            <motion.img src={companyStar} alt="company-star" variants={rotateVariants} animate="visible"/>
            <motion.img src={companyStar} alt="company-star" variants={rotateVariants} animate="visible"/>
        </div>
    )
}