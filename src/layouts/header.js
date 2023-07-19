import logo from 'assets/images/logo.png';
import { Nav } from './nav';
import { motion } from 'framer-motion';
import { animateVariant } from 'pages/home';
import { NavBtn } from 'components/nav-btn';
import { useEffect, useRef, useState } from 'react'
import { Link} from 'react-router-dom';

export default function Header(props) {
    const [toggle, setToggle] = useState(false);
    const navRef = useRef();
    useEffect(() => {
        changeToggle();
    }, []);
    function toggleNav() {
        if (toggle) {
            navRef.current.style.left = "-50vw";
            setTimeout(() => {
                setToggle(!toggle);
            }, 300);
        }
        else {
            setToggle(!toggle);
        }
    }
    function changeToggle() {
        window.innerWidth > 700 ? setToggle(true) : setToggle(false);
    }
    return (
        <motion.header variants={animateVariant} animate="visible" initial="hidden" className={props.class}>
            <Link to='/'>
                <img src={logo} alt="company logo" width="100%" height="100%" />
            </Link>
            <NavBtn toggleNav={toggleNav} />
            {toggle ? <Nav toggle={toggle} toggleNav={toggleNav} ref={navRef} /> : null}
        </motion.header>
    )
}