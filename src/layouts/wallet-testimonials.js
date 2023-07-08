import testimonialTopShape from 'assets/images/wallet-testimonial-top-shape.png';
import testimonialBottomShape from 'assets/images/wallet-testimonial-bottom-shape.png';
import { SectionHeading } from 'components/section-heading';
import { Suspense, lazy } from 'react';

const WalletTestimonialBox = lazy(() => import("components/wallet-testimonial-box").then(module => {
    return { default: module.WalletTestimonialBox }
}))

export default function WalletTestimonials() {
    return (
        <section className="wallet__testimonials">
            <img src={testimonialTopShape} alt="testimonial shape" className="testimonial-shape" />
            <SectionHeading heading={["WHAT CUSTOMERS SAY ABOUT OUR", <br />, "EARN SERVICES"]} />
            <Suspense fallback={<p>Loading...</p>}>
                <WalletTestimonialBox userName="Wander" userDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." />
                <WalletTestimonialBox userName="Baret" userDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." />
                <WalletTestimonialBox userName="Terel" userDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." />
            </Suspense>
            <img src={testimonialBottomShape} alt="testimonial shape" className="testimonial-shape" />
        </section>
    )
}