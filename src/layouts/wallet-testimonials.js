import testimonialTopShape from 'assets/images/wallet-testimonial-top-shape.png';
import testimonialBottomShape from 'assets/images/wallet-testimonial-bottom-shape.png';
import { SectionHeading } from 'components/section-heading';
import { WalletTestimonialBox } from 'components/wallet-testimonial-box';

export default function WalletTestimonials() {
    return (
        <section className="wallet__testimonials">
            <img src={testimonialTopShape} alt="testimonial shape" className="testimonial-shape"/>
            <SectionHeading heading={["WHAT CUSTOMERS SAY ABOUT OUR",<br/>,"EARN SERVICES"]}/>
            <WalletTestimonialBox userName="Wander" userDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."/>
            <WalletTestimonialBox userName="Baret" userDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."/>
            <WalletTestimonialBox userName="Terel" userDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."/>  
            <img src={testimonialBottomShape} alt="testimonial shape" className="testimonial-shape"/>
        </section>
    )
}