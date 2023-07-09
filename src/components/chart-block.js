import { ChartDescriptionBlock } from "./chart-description-block";
import { motion } from "framer-motion";
import { Picture } from "./picture";

export function ChartBlock({ alt, images, heading, description, btnText }) {
    return (
        <div className="chart-block">
            <Picture images={images}>
                <motion.img src={images[1]} alt={alt} whileHover={{ scale: 1.3 }} loading="lazy" />
            </Picture>
            <ChartDescriptionBlock heading={heading} description={description} btnText={btnText} />
        </div>
    )
}