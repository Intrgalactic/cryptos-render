import { CtaBtn } from "components/cta-btn";
import { SectionHeading } from "components/section-heading";
import { motion } from "framer-motion";
import { fadeInVariants } from "./testimonials";
import { Suspense, lazy } from "react";

const VideoBlock = lazy(() => import("components/video-block").then(module => {
    return { default: module.VideoBlock }
}))

export default function VideoSection() {
    return (
        <>
            <div className="video-section__section-heading"><SectionHeading heading={["Start the future from", <br />, "the best point possible"]} /></div>
            <motion.section className="video-section" variants={fadeInVariants} animate="visible" initial="hidden">
                <Suspense fallback={<p>Loading...</p>}>
                    <VideoBlock />
                </Suspense>
                <CtaBtn btnText="start investing right now" />
            </motion.section>
        </>
    )
}