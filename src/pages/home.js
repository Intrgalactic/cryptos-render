import BenefitsSection from "layouts/benefits-section";
import ChartSection from "layouts/chart-section";
import Header from "layouts/header";
import Hero from "layouts/hero";
import Testimonials from "layouts/testimonials";
import Footer from "layouts/footer";
import fixedRates from 'assets/images/fixed-rates.png';
import earnFromZero from 'assets/images/earn-from-zero.png';
import scalableInterface from 'assets/images/scalable-interface.png';
import webpFixedRates from 'assets/images/fixed-rates.webp';
import webpEarnFromZero from 'assets/images/earn-from-zero.webp';
import webpScalableInterface from 'assets/images/scalable-interface.webp';
import { CtaBtn } from "components/cta-btn";
import { SectionHeading } from "components/section-heading";
import Loader from "layouts/loader";
import Incentive from "layouts/callout";
import { Suspense, lazy } from "react";

const VideoSection = lazy(() => import("layouts/video-section"));
const News = lazy(() => import("layouts/news"));
const CompaniesBar = lazy(() => import("layouts/companies-bar"));
const BenefitBox = lazy(() => import("components/benefit-box").then(module => {
    return {default:module.BenefitBox}
}))
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
export default function Home() {
    return (
        <Suspense fallback={<Loader/>}>
            <Header />
            <Hero />
            <SectionHeading heading={["stop focusing on things which", <br />, "take too much time"]} />
            <BenefitsSection>
                <BenefitBox images={[fixedRates,webpFixedRates]} alt="Woman sitting on gold" heading="fixed rates" description="Our services offer fixed deposit, therefore you can earn without any risk" />
                <BenefitBox images={[earnFromZero,webpEarnFromZero]} alt="Man earning money" heading="earn from zero" description="Our product is universal to every capital levels and is same profitable for everyone" />
                <BenefitBox images={[scalableInterface,webpScalableInterface]} alt="Man looking at chart" heading="scalable interface" description="Our charts can be fit on desktop and on mobile either to share you best experience" />
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
        </Suspense>
    )
}