
export function SectionHeading({heading}) {
    return (
        <h1 className="section-heading">
            {heading.map((value) => (
                value
            ))}
        </h1>
    )
}