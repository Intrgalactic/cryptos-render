import { BenefitBox } from "components/benefit-box";
import { SectionHeading } from "components/section-heading";
import swap from 'assets/images/swap.png';
import launchpad from 'assets/images/launchpad.png';
import apy from 'assets/images/apy.png';
import BenefitsSection from "layouts/benefits-section";
import Header from "layouts/header";
import { SectionHeadingDescription } from "components/section-heading-description";
import { ChartBlock } from "components/chart-block";
import swapDescription from 'assets/images/swap-description.png';
import launchpadDescription from 'assets/images/launchpad-description.png';
import WalletTestimonials from "layouts/wallet-testimonials";
import Footer from "layouts/footer";
import Loader from "layouts/loader";
import useLoader from "hooks/useLoader";
import { useNavigate } from "react-router-dom";

export default function Wallet({isLoading,setIsLoading}) {
    useLoader(setIsLoading);
    const navigate = useNavigate();
    return (
        <>
            <div className="wallet-header"><Header /></div>
            <div className="wallet-app">
                <SectionHeading heading={["CHOOSE YOUR OPTION TO FLY THE SKY"]} />
                <SectionHeadingDescription description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
                <BenefitsSection>
                    <BenefitBox image={swap} heading="SWAP CRYPTOCURRENCY" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" alt="swap cryptocurrency" btnText="swap" action={() => {navigate('/exchange')}}/>
                    <BenefitBox image={launchpad} heading="DOUBLE YOUR FUNDS WITH LAUNCHPAD" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" alt="cryptocurrency launchpad" btnText="redirect"/>
                    <BenefitBox image={apy} heading="STAKE CRYPTOCURRENCY" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" alt="cryptocurrency stake" btnText="stake" />
                </BenefitsSection>
                <SectionHeading heading={["HAVE ANY DOUBTS WHAT OPTION IS THE BEST FOR YOU?"]} />
                <SectionHeadingDescription description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
                <ChartBlock alt="launchpad description" image={launchpadDescription} heading="GO TO LAUNCHPAD IF..." description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                <ChartBlock alt="swap description" image={swapDescription} heading="STAKE CRYPTOCURRENCY IF..." description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                <WalletTestimonials />
                <Footer />
            </div>
            {isLoading &&
                <Loader />}
        </>
    )
}