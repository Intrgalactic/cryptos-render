import { RegisterForm } from "components/register-form";
import { SectionLeftBlock } from "components/section-left-block";
import { SectionRightBlock } from "components/section-right-block";

export default function RegisterSection() {
    return (
        <div className="register__section">
            <SectionLeftBlock class="register__left-block">
                <h1>register now and gain extra benefits</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </SectionLeftBlock>
            <SectionRightBlock class="register__right-block">
                <RegisterForm/>
            </SectionRightBlock>
        </div>
    )
}