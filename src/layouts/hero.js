import { HeroBtn } from "components/hero-btn";
import { SectionLeftBlock } from "components/section-left-block";
import { SectionRightBlock } from "components/section-right-block";
import { motion } from "framer-motion";
import { animateVariant } from "pages/home";
import hero from 'assets/images/hero-img.png';
export default function Hero() {
    return (
        <motion.section className="hero" variants={animateVariant} initial="hidden" animate="visible">
            <SectionLeftBlock class="hero__left-block">
                <h1 className="hero__heading">automate your <br />trading and <font className="hero__highlighted">earnings</font></h1>
                <p className="hero__description">Improve your earnings with <br />all-in-one charts</p>
                <HeroBtn />
            </SectionLeftBlock>
            <SectionRightBlock class="hero__right-block">
                <img src={hero} alt="Enterpreneur Woman" />
            </SectionRightBlock>
        </motion.section>
    )
}