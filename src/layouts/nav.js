import { NavBtn } from "components/nav-btn";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
export const Nav = forwardRef((props,ref) => {
    const location = useLocation();
    const route = location.pathname;
    const paths = ['/wallet', '/exchange', '/pricing', '/faq', '/sign-in', '/sign-up'];
    const index = paths.indexOf(route);
    paths[index] = '/';
    return (
        <motion.nav ref={ref} animate={{translateX:0}} initial={{translateX:-1000}} transition={{duration:0.3,ease:'linear'}}>
            {props.toggle ? <NavBtn toggleNav={props.toggleNav} toggle={props.toggle}/> : null}
            {paths.map((link, index) => (
                link === "/" ? <Link key={index} to={link}>Home</Link> : <Link key={index} to={link}>{link.slice(1, link.length)}</Link>
            ))}

        </motion.nav>
    )
});