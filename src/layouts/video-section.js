import { CtaBtn } from "components/cta-btn";
import { SectionHeading } from "components/section-heading";
import { VideoBlock } from "components/video-block";
import { motion } from "framer-motion";
import { fadeInVariants } from "./testimonials";

export default function VideoSection() {
    return (
        <>
            <div className="video-section__section-heading"><SectionHeading heading={["Start the future from", <br />, "the best point possible"]} /></div>
            <motion.section className="video-section" variants={fadeInVariants} animate="visible" initial="hidden">
                <VideoBlock />
                <CtaBtn btnText="start investing right now" />
            </motion.section>
        </>
    )
}