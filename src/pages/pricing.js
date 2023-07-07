import useLoader from "hooks/useLoader";
import Faq from "layouts/faq";
import Footer from "layouts/footer";
import Header from "layouts/header";
import Loader from "layouts/loader";
import PricingSection from "layouts/pricing-section";
import { FaqRecord } from "components/faq-record";
import { motion } from "framer-motion";
export default function Pricing({ isLoading, setIsLoading }) {
    useLoader(setIsLoading);
    return (
        <div className="pricing-app">
            <Header />
            <PricingSection />
            <Faq heading={["frequently asked questions", <br />, "about subscription"]} class="pricing-faq">

                <FaqRecord heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
                    <>
                        <hr />
                        <motion.p animate={{ y: 0 }} initial={{ y: -200 }} transition={{ type: "linear" }}>It is a long established fact that a reader will be distracted by the readable content</motion.p>
                    </>
                </FaqRecord>
                <FaqRecord heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
                    <>
                        <hr />
                        <motion.p animate={{ y: 0 }} initial={{ y: -200 }} transition={{ type: "linear" }}>It is a long established fact that a reader will be distracted by the readable content</motion.p>
                    </>
                </FaqRecord>
                <FaqRecord heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
                    <>
                        <hr />
                        <motion.p animate={{ y: 0 }} initial={{ y: -200 }} transition={{ type: "linear" }}>It is a long established fact that a reader will be distracted by the readable content</motion.p>
                    </>
                </FaqRecord>
                <FaqRecord heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
                    <>
                        <hr />
                        <motion.p animate={{ y: 0 }} initial={{ y: -200 }} transition={{ type: "linear" }}>It is a long established fact that a reader will be distracted by the readable content</motion.p>
                    </>
                </FaqRecord>

            </Faq>
            <Footer />
            {isLoading &&
                <Loader />}
        </div>
    )
}