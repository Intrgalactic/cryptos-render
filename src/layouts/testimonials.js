import { SectionHeading } from "components/section-heading";
import { motion } from "framer-motion";
import { Suspense, lazy, useRef } from "react";
export const fadeInVariants = {
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            ease: 'linear'
        }
    },
    hidden: {
        opacity: 0,
        x: -300,
    }
}
const TestimonialBox = lazy(() => import("components/testimonial-box").then(module => {
    return { default: module.TestimonialBox }
}))
const MoveArrows = lazy(() => import("components/move-arrows").then(module => {
    return { default: module.MoveArrows }
}))

export default function Testimonials() {
    const testimonialsRef = useRef();
    return (
        <>
            <SectionHeading heading={["hear some kind words", <br />, "from our customers"]} />
            <motion.section className="testimonials" variants={fadeInVariants} animate="visible" initial="hidden" ref={testimonialsRef}>
                <Suspense fallback={<p>Loading...</p>}>
                    <TestimonialBox name="steve" lastname="pater" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
                    <TestimonialBox name="john" lastname="len" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
                    <TestimonialBox name="satoshi" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
                    <TestimonialBox name="keiran" lastname="sea" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
                    <TestimonialBox name="marie" lastname="bali" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
                </Suspense>
            </motion.section>
            <MoveArrows ref={testimonialsRef} />
        </>
    )
}