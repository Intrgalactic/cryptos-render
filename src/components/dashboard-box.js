import { SectionHeading } from "./section-heading";

export function DashboardBox({ children, boxHeading,boxName }) {
    return (
        <div className="dashboard-box">
            <SectionHeading heading={[boxHeading]} />
            <div className={`dashboard-box__content ${boxName}`} >
                {children}
            </div>
        </div>
    )
}