import { BenefitBox } from "components/benefit-box";
import { SectionHeading } from "components/section-heading";
import swap from 'assets/images/swap.png';
import launchpad from 'assets/images/launchpad.png';
import apy from 'assets/images/apy.png';
import webpSwap from 'assets/images/swap.webp';
import webpLaunchpad from 'assets/images/launchpad.webp';
import webpApy from 'assets/images/apy.webp';
import BenefitsSection from "layouts/benefits-section";
import Header from "layouts/header";
import { SectionHeadingDescription } from "components/section-heading-description";
import swapDescription from 'assets/images/swap-description.png';
import launchpadDescription from 'assets/images/launchpad-description.png';
import webpSwapDescription from 'assets/images/swap-description.webp';
import webpLaunchpadDescription from 'assets/images/launchpad-description.webp';
import Footer from "layouts/footer";
import Loader from "layouts/loader";
import { useNavigate } from "react-router-dom";
import { Suspense,lazy } from "react";

const WalletTestimonials = lazy(() => import("layouts/wallet-testimonials"));
const ChartBlock = lazy(() => import("components/chart-block").then(module => {
    return {default: module.ChartBlock}
}))
export default function Wallet() {
    const navigate = useNavigate();
    return (
        <Suspense fallback={<Loader/>}>
            <div className="wallet-header"><Header /></div>
            <div className="wallet-app">
                <SectionHeading heading={["CHOOSE YOUR OPTION TO FLY THE SKY"]} />
                <SectionHeadingDescription description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
                <BenefitsSection>
                    <BenefitBox images={[swap,webpSwap]} heading="SWAP CRYPTOCURRENCY" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" alt="swap cryptocurrency" btnText="swap" action={() => {navigate('/exchange')}}/>
                    <BenefitBox images={[launchpad,webpLaunchpad]} heading="DOUBLE YOUR FUNDS WITH LAUNCHPAD" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" alt="cryptocurrency launchpad" btnText="redirect"/>
                    <BenefitBox images={[apy,webpApy]} heading="STAKE CRYPTOCURRENCY" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" alt="cryptocurrency stake" btnText="stake" />
                </BenefitsSection>
                <SectionHeading heading={["HAVE ANY DOUBTS WHAT OPTION IS THE BEST FOR YOU?"]} />
                <SectionHeadingDescription description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
                <ChartBlock alt="launchpad description" images={[launchpadDescription,webpLaunchpadDescription]} heading="GO TO LAUNCHPAD IF..." description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                <ChartBlock alt="swap description" images={[swapDescription,webpSwapDescription]} heading="STAKE CRYPTOCURRENCY IF..." description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                <WalletTestimonials />
                <Footer />
            </div>
        </Suspense>
    )
}