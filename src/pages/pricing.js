
import Faq from "layouts/faq";
import Footer from "layouts/footer";
import Header from "layouts/header";
import Loader from "layouts/loader";
import { motion } from "framer-motion";
import { Suspense,lazy } from "react";
const PricingSection = lazy(() => import("layouts/pricing-section"));
const FaqRecord = lazy(() => import('components/faq-record').then(module => {
    return { default: module.FaqRecord }
}))
export default function Pricing() {
    return (
        <Suspense fallback={<Loader />}>
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
            </div>
        </Suspense>
    )
}