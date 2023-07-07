import moveArr from 'assets/images/news-move-arrow.png';
import { forwardRef, useState } from 'react';

export const MoveArrows = forwardRef((props, ref) => {
    const [scrollCount, setScrollCount] = useState(0);
    function scrollToElement(e) {
        const elementsToScroll = ref.current.childNodes;
        if (scrollCount - 1 < 0 && e.target.classList.contains("left-move-arrow")) {
            elementsToScroll[elementsToScroll.length - 1].scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
            setScrollCount(elementsToScroll.length - 1);
        }
        else if (scrollCount + 1 > elementsToScroll.length - 1 && e.target.classList.contains("right-move-arrow")) {
            elementsToScroll[0].scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
            setScrollCount(0);
        }
        else {
            e.target.classList.contains("left-move-arrow") ? elementsToScroll[scrollCount - 1].scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }) : elementsToScroll[scrollCount + 1].scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
            e.target.classList.contains("left-move-arrow") ? setScrollCount(scrollCount - 1) : setScrollCount(scrollCount + 1);
        }
    }
    return (
        <div className="move-arrows">
            <img src={moveArr} alt="move arrow" onClick={(e) => { scrollToElement(e) }} className='left-move-arrow' />
            <img src={moveArr} alt="move arrow" onClick={(e) => { scrollToElement(e) }} className="right-move-arrow" />
        </div>
    )
})