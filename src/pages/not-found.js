import { Picture } from "components/picture";
import Header from "layouts/header";
import notFound from 'assets/images/not-found.png';
import webpNotFound from 'assets/images/not-found.webp';
import { SectionHeading } from "components/section-heading";

export default function NotFound() {
    return (
        <div className="not-found-app">
            <Header/>
            <SectionHeading heading={["Page not found"]}/>
            <Picture images={[notFound,webpNotFound]}>
                <img src={notFound} alt="not found" className="not-found"/>
            </Picture>
        </div>
    )
}