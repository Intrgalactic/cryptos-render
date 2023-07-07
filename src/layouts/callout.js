import { CtaBtn } from "components/cta-btn";
import { motion } from "framer-motion";
import { fadeInVariants } from "./testimonials";
export default function Incentive(props) {
    return (
        <motion.section className={`incentive ${props.class}`} variants={fadeInVariants} animate="visible" initial="hidden">
            {props.children}
        </motion.section>
    )
}