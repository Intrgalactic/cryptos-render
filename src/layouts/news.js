import { NewsBox } from "components/news-box";
import { SectionHeading } from "components/section-heading";
import firstNewsImage from 'assets/images/news-example-image.jpg';
import secondNewsImage from 'assets/images/second_news-example-image.jpg';
import { MoveArrows } from "components/move-arrows";
import { useRef } from "react";

export default function News() {
    const newsRef = useRef();
    return (
        <section className="news">
            <div className="news-heading">
                <SectionHeading heading={["latest breaking news"]} />
                <p>Read about most interesting and latest breaking news from the cryptocurrency universum and our community</p>
            </div>
            <div className="news__records" ref={newsRef}>
                <NewsBox image={firstNewsImage} alt="nasdaq session news presentation" heading="LATEST NASDAQ SESSION" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
                <NewsBox image={secondNewsImage} alt="altcoin recession presentation" heading="ALTCOIN RECESSION" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
            </div>
            <MoveArrows ref={newsRef}/>
        </section>
    )
}