import testimonialUser from 'assets/images/testimonial-user-image.jpg';
import stars from 'assets/images/stars.png';

export function TestimonialBox({name,lastname,description}) {
    return (
        <div className="testimonial-box">
            <img src={testimonialUser} alt="testimonial user face"/>
            <h1>{name} {lastname}</h1>
            <p>{description}</p>
            <img src={stars} alt="rating"/>
        </div>
    )
}