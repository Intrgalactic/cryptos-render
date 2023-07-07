import { motion } from "framer-motion";
export default function BenefitsSection({children}) {
    return (
        <>
            <motion.section className="benefits" animate={{opacity:1,x:"0"}} initial={{opacity:0,x:"-500px"}} transition={{duration:0.4}}>
                {children}
            </motion.section>
        </>
    )
}