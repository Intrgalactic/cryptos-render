import logo from 'assets/images/logo.png';
import { ButtonBox } from 'components/button-box';
import { CtaBtn } from 'components/cta-btn';
import { authContext } from 'context/authContext';
import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function DashboardNav() {
    const authProps = useContext(authContext);
    const disconnectUser = authProps.logOutUser;
    const isLogged = authProps.isLogged;
    const navigate = useNavigate();
    useEffect(() => {
        if (isLogged === false) {
            navigate('/');
        }
    },[isLogged,navigate]);
   
    return (
        <nav>
            <img src={logo} alt="logo" width="80%" onClick={() => {navigate("/")}}/>
            <Link to='/account-overview'>account overview</Link>
            <Link to='/professional-analysis'>professional analysis</Link>
            <Link to='/market'>market</Link>
            <Link to='/settings'>settings</Link>
            <ButtonBox>
                <CtaBtn btnText="report a bug"/>
                <CtaBtn btnText="log out" action={disconnectUser}/>
            </ButtonBox>
        </nav>
    )
}