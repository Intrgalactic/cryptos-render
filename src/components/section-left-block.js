
export function SectionLeftBlock(props) {
    return (
        <div className={`section__left-block ${props.class}`}>
            {props.children}
        </div>
    )
}