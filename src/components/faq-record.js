import { motion } from "framer-motion"
import { useState } from "react";

export function FaqRecord(props) {
    const [expand, setExpand] = useState(false);
    return (
        <div className="faq__record" onClick={() => setExpand(!expand)}>
            <h3>{props.heading}</h3>
            {expand &&
                props.children
            }
        </div>
    )
}