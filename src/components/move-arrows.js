import moveArr from 'assets/images/news-move-arrow.png';
import webpMoveArr from 'assets/images/news-move-arrow.webp';
import { forwardRef, useState } from 'react';
import { Picture } from './picture';

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
            <Picture images={[moveArr,webpMoveArr]}>
                <img src={webpMoveArr} alt="move arrow" onClick={(e) => { scrollToElement(e) }} className='left-move-arrow' loading='lazy' width="200px" height="200px"/>
            </Picture>
            <Picture images={[moveArr,webpMoveArr]}>
                <img src={webpMoveArr} alt="move arrow" onClick={(e) => { scrollToElement(e) }} className='right-move-arrow' loading='lazy' width="200px" height="200px"/>
            </Picture>
        </div>
    )
})