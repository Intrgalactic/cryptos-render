import BenefitsSection from "layouts/benefits-section";
import Webinar from "layouts/callout";
import ChartSection from "layouts/chart-section";
import CompaniesBar from "layouts/companies-bar";
import Header from "layouts/header";
import Hero from "layouts/hero";
import Testimonials from "layouts/testimonials";
import VideoSection from "layouts/video-section";
import News from "layouts/news";
import Footer from "layouts/footer";
import { BenefitBox } from "components/benefit-box";
import fixedRates from 'assets/images/fixed-rates.png';
import earnFromZero from 'assets/images/earn-from-zero.png';
import scalableInterface from 'assets/images/scalable-interface.png';
import { CtaBtn } from "components/cta-btn";
import { SectionHeading } from "components/section-heading";
import Loader from "layouts/loader";
import useLoader from "hooks/useLoader";
import Incentive from "layouts/callout";
import { CustomBtn } from "components/custom-btn";
export const animateVariant = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            type: "tween"
        }
    },
    hidden: {
        opacity: 0, y: -170
    },

}
export default function Home({ isLoading, setIsLoading }) {
    useLoader(setIsLoading);
    return (
        <>
            <Header />
            <Hero />
            <SectionHeading heading={["stop focusing on things which", <br />, "take too much time"]} />
            <BenefitsSection>
                <BenefitBox image={fixedRates} alt="Woman sitting on gold" heading="fixed rates" description="Our services offer fixed deposit, therefore you can earn without any risk" />
                <BenefitBox image={earnFromZero} alt="Man earning money" heading="earn from zero" description="Our product is universal to every capital levels and is same profitable for everyone" />
                <BenefitBox image={scalableInterface} alt="Man looking at chart" heading="scalable interface" description="Our charts can be fit on desktop and on mobile either to share you best experience" />
                <CtaBtn btnText="Start earning" />
            </BenefitsSection>
            <ChartSection />
            <VideoSection />
            <Testimonials />
            <CompaniesBar />
            <Incentive>
                <h1>SIGN UP TO OUR FREE WEBINAR <br />ABOUT CRYPTOCURRENCY WORLD</h1>
                <CtaBtn btnText="sign up" />
            </Incentive>
            <News />
            <Footer />
            {isLoading &&
                <Loader />}
        </>
    )
}