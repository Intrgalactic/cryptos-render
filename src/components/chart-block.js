import { ChartDescriptionBlock } from "./chart-description-block";
import { motion } from "framer-motion";

export function ChartBlock({ alt, image, heading, description, btnText }) {
    return (
        <div className="chart-block">
            <motion.img src={image} alt={alt} whileHover={{scale:1.3}}/>
            <ChartDescriptionBlock heading={heading} description={description} btnText={btnText} />
        </div>
    )
}