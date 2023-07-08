import { SectionHeading } from "components/section-heading";
import Header from "layouts/header";
import Faq from "layouts/faq";
import { motion } from "framer-motion";
import Footer from "layouts/footer";
import { Suspense, lazy } from "react";
import Loader from "layouts/loader";
const FaqRecord = lazy(() => import("components/faq-record").then(module => {
    return {default:module.FaqRecord}
}))
const Incentive = lazy(() => import("layouts/callout"));
const RegisterSection = lazy(() => import("components/register-section"));
export default function SignUp() {
    return (
        <Suspense fallback={<Loader/>}>
            <Header />
            <div className="register-app">
                <Incentive class="register__incentive">
                    <p>INVITE YOUR FRIENDS WITH YOUR REFERRAL CODE AND <br /> GET 25% DISCOUNT PER EVERY THAT WILL BUY A<br /> SUBSCRIPTION!</p>
                </Incentive>
                <SectionHeading heading={["register account"]} />
                <RegisterSection />
                <Faq class="register__faq" heading={["answers to common", <br />, "questions"]} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
                    <div className="register__faq-right-block">
                        <FaqRecord heading="LOREM IPSUM DOLOR SIT AMET?">
                            <motion.p initial={{ x: -200 }} animate={{ x: 0 }} transition={{ type: "ease-in" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </motion.p>
                        </FaqRecord>
                        <FaqRecord heading="LOREM IPSUM DOLOR SIT AMET?">
                            <motion.p initial={{ x: -200 }} animate={{ x: 0 }} transition={{ type: "ease-in" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </motion.p>
                        </FaqRecord>
                        <FaqRecord heading="LOREM IPSUM DOLOR SIT AMET?">
                            <motion.p initial={{ x: -200 }} animate={{ x: 0 }} transition={{ type: "ease-in" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </motion.p>
                        </FaqRecord>
                        <FaqRecord heading="LOREM IPSUM DOLOR SIT AMET?">
                            <motion.p initial={{ x: -200 }} animate={{ x: 0 }} transition={{ type: "ease-in" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </motion.p>
                        </FaqRecord>
                        <FaqRecord heading="LOREM IPSUM DOLOR SIT AMET?">
                            <motion.p initial={{ x: -200 }} animate={{ x: 0 }} transition={{ type: "ease-in" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </motion.p>
                        </FaqRecord>
                    </div>
                </Faq>
                <Footer/>
            </div>
        </Suspense>
    )
}