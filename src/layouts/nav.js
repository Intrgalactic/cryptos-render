import { NavBtn } from "components/nav-btn";
import { forwardRef, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { authContext } from "context/authContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebase.js";
import { CtaBtn } from "components/cta-btn";


export const Nav = forwardRef((props, ref) => {
    const authProps = useContext(authContext);
    const isLogged = authProps.isLogged;
    const disconnectUser = authProps.logOutUser;
    const location = useLocation();
    const navigate = useNavigate();
    const route = location.pathname;
    const [paths, setPaths] = useState(['/wallet', '/exchange', '/pricing', '/faq', '/log-in', '/sign-up']);
    useEffect(() => {
        if (isLogged) {
            setPaths(['/wallet', '/exchange', '/pricing', '/faq', '/dashboard', '/log-out']);
            if (route === "/sign-up") {
                setTimeout(() => {
                    navigate('/dashboard');
                }, 5000);
            }
            if (route === "log-in") {
                navigate('/dashboard');
            }
        }
        else {
            if (route === "/reset-password") {
                setPaths(['/wallet', '/exchange', '/pricing', '/faq', '/', '/sign-up'])
            }
            setPaths(['/wallet', '/exchange', '/pricing', '/faq', '/log-in', '/sign-up']);
        }
    }, [isLogged]);
    const index = paths.indexOf(route);
    paths[index] = '/';
    return (
        <motion.nav ref={ref} animate={{ translateX: 0 }} initial={{ translateX: -1000 }} transition={{ duration: 0.3, ease: 'linear' }}>
            {props.toggle ? <NavBtn toggleNav={props.toggleNav} toggle={props.toggle} /> : null}
            {paths.map((link, index) => (
                link === "/" ? <Link key={index} to={link}>Home</Link> : link !== '/log-out' ? <Link key={index} to={link}>{link.slice(1, link.length)}</Link> : <Link onClick={disconnectUser} >Log out</Link>
            ))}

        </motion.nav>
    )
});