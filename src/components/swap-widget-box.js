import { forwardRef } from "react"

function CryptoSwapWidgetBox(props,ref) {
    return (
        <div className="swap-widget__box" ref={ref}>
            {props.children}
        </div>
    )
}

export const SwapWidgetBox = forwardRef(CryptoSwapWidgetBox);