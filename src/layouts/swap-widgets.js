import { forwardRef } from "react"

function SwapWidgetsBox(props,ref) {
    return (
        <div className="swap-widgets" ref={ref}>
            {props.children}
        </div>
    )
}

const SwapWidgets = forwardRef(SwapWidgetsBox);
export default SwapWidgets;