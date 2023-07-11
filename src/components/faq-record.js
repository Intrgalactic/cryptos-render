import { motion } from "framer-motion"
import { useState } from "react";

export function FaqRecord(props) {
    const [expand, setExpand] = useState(false);
    return (
        <div className="faq__record" onClick={() => setExpand(!expand)}>
            <h4>{props.heading}</h4>
            {expand &&
                props.children
            }
        </div>
    )
}