import { MoveArrows } from "components/move-arrows";
import { SectionHeading } from "components/section-heading";
import { TestimonialBox } from "components/testimonial-box";
import { motion } from "framer-motion";
import { useRef } from "react";
export const fadeInVariants = {
    visible: {
        opacity:1,
        x:0,
        transition: {
            ease:'linear'
        }
    },
    hidden: {
        opacity:0,
        x:-300,
    }
}
export default function Testimonials() {
    const testimonialsRef = useRef();
    return (
        <>
            <SectionHeading heading={["hear some kind words", <br />, "from our customers"]} />
            <motion.section className="testimonials" variants={fadeInVariants} animate="visible" initial="hidden" ref={testimonialsRef}>
                <TestimonialBox name="steve" lastname="pater" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
                <TestimonialBox name="john" lastname="len" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
                <TestimonialBox name="satoshi" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
                <TestimonialBox name="keiran" lastname="sea" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
                <TestimonialBox name="marie" lastname="bali" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
            </motion.section>
            <MoveArrows ref={testimonialsRef}/>
        </>
    )
}