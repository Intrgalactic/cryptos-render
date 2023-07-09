import { SectionHeading } from 'components/section-heading';
import { Suspense, lazy } from 'react';

const WalletTestimonialBox = lazy(() => import("components/wallet-testimonial-box").then(module => {
    return { default: module.WalletTestimonialBox }
}))

export default function WalletTestimonials() {
    return (
        <section className="wallet__testimonials">
            <SectionHeading heading={["WHAT CUSTOMERS SAY ABOUT OUR", <br />, "EARN SERVICES"]} />
            <Suspense fallback={<p>Loading...</p>}>
                <WalletTestimonialBox userName="Wander" userDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." />
                <WalletTestimonialBox userName="Baret" userDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." />
                <WalletTestimonialBox userName="Terel" userDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." />
            </Suspense>
           
        </section>
    )
}