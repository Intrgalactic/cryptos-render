import { SectionHeading } from "components/section-heading";
import { motion } from "framer-motion";
import { fadeInVariants } from "./testimonials";
import { lazy } from "react";

const CompaniesStars = lazy(() => import("components/companies-stars").then(module => {
    return {default:module.CompaniesStars}
}))
const CompaniesLogos = lazy(() => import("components/companies-logos").then(module => {
    return {default:module.CompaniesLogos}
}))

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