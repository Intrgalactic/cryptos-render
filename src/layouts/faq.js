import { SectionHeading } from "components/section-heading";
import { SectionHeadingDescription } from "components/section-heading-description";
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