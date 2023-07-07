import { SectionHeading } from "components/section-heading";
import { CompaniesStars } from "components/companies-stars";
import { CompaniesLogos } from "components/companies-logos";
import { motion } from "framer-motion";
import { fadeInVariants } from "./testimonials";
export default function CompaniesBar() {
    return (
        <>
        <SectionHeading heading={["widely used on",<br/>,"worldwide platforms"]}/>
        <motion.section className="companies-bar" variants={fadeInVariants} animate="visible" initial="hidden">
            <CompaniesStars/>
            <CompaniesLogos/>
        </motion.section>
        </>
    )
}