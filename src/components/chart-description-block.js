import { CtaBtn } from "./cta-btn";

export function ChartDescriptionBlock({heading,description,btnText}) {
    return (
        <div className="chart-block__description">
            <h1 className="chart-block__description-heading">{heading}</h1>
            <p className="chart-block__description-description">{description}</p>
            {btnText ? <CtaBtn btnText={btnText}/> : null}
        </div>
    )
}