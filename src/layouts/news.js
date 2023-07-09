import { SectionHeading } from "components/section-heading";
import firstNewsImage from 'assets/images/news-example-image.jpg';
import secondNewsImage from 'assets/images/second_news-example-image.jpg';
import webpFirstNewsImage from 'assets/images/news-example-image.webp';
import webpSecondNewsImage from 'assets/images/second_news-example-image.webp';
import { Suspense, lazy, useRef } from "react";

const MoveArrows = lazy(() => import("components/move-arrows").then(module => {
    return { default: module.MoveArrows }
}))
const NewsBox = lazy(() => import("components/news-box").then(module => {
    return { default: module.NewsBox }
}))

export default function News() {
    const newsRef = useRef();
    return (
        <section className="news">
            <div className="news-heading">
                <SectionHeading heading={["latest breaking news"]} />
                <p>Read about most interesting and latest breaking news from the cryptocurrency universum and our community</p>
            </div>
            <div className="news__records" ref={newsRef}>
                <Suspense fallback={<p>Loading...</p>}>
                    <NewsBox images={[firstNewsImage,webpFirstNewsImage]} alt="nasdaq session news presentation" heading="LATEST NASDAQ SESSION" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
                    <NewsBox images={[secondNewsImage,webpSecondNewsImage]} alt="altcoin recession presentation" heading="ALTCOIN RECESSION" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
                </Suspense>
            </div>
            <Suspense fallback={<p>Loading...</p>}>
                <MoveArrows ref={newsRef} />
            </Suspense>
        </section>
    )
}