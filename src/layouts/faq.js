import { FaqRecord } from "components/faq-record";
import { SectionHeading } from "components/section-heading";
import { SectionHeadingDescription } from "components/section-heading-description";
import { motion } from "framer-motion";
export default function Faq(props) {
    return (
        <>
            <section className={`faq ${props.class}`}>
                <div className="faq__left-block">
                    <SectionHeading heading={props.heading} />
                    {props.description && <SectionHeadingDescription description={props.description}/>}
                </div>
                {props.children}
            </section>
        </>
    )
}