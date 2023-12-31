import testimonialUser from 'assets/images/testimonial-user-image.jpg';
import stars from 'assets/images/stars.png';
import webpTestimonialUser from 'assets/images/testimonial-user-image.webp';
import webpStars from 'assets/images/stars.webp';
import { Picture } from './picture';

export function TestimonialBox({ name, lastname, description }) {
    return (
        <div className="testimonial-box">
            <Picture images={[testimonialUser, webpTestimonialUser]}>
                <img src={testimonialUser} alt="testimonial user face" width="45%" height="130px"/>
            </Picture>
            <h1>{name} {lastname}</h1>
            <p>{description}</p>
            <Picture images={[stars, webpStars]}>
                <img src={stars} alt="rating" width="80%" height="45px"/>
            </Picture>
        </div>
    )
}