import { signInWithEmailAndPassword } from "firebase/auth";
import { CtaBtn } from "./cta-btn";
import { validateForm } from "utils/utilities";
import { useRef, useState } from "react";
import { auth } from "firebase.js";
import { Link, useNavigate } from "react-router-dom";
import { AuthForm } from "./auth-form";
import { getFirebaseErr } from "utils/utilities";
export function LoginForm() {
    const navigate = useNavigate();
    const userPersonalData = useRef({
        email: "",
        password: ""
    })
    const [validateErr, setValidateErr] = useState();
    const [firebaseErr, setFirebaseErr] = useState();

    async function validateLoginForm(e) {
        e.preventDefault();
        if (validateForm(userPersonalData.current,setValidateErr)) {
            logToAccount();
        };
    }
    function logToAccount() {
        signInWithEmailAndPassword(auth, userPersonalData.current.email, userPersonalData.current.password)
            .then(() => {
                navigate('/dashboard');
            })
            .catch((err) => {
                getFirebaseErr(err.message,setFirebaseErr);
            })
        setFirebaseErr(false);
        setValidateErr(false);
    }
    return (
        <AuthForm formClass="login-form">
                <input type="email" required placeholder="Enter Your Email" onChange={(e) => {userPersonalData.current.email = e.target.value}}/>
                <input type="password" required onChange={(e) => {userPersonalData.current.password = e.target.value}} placeholder="Enter Your Password"/>
                {validateErr ? <font className="auth__form-err">{validateErr}</font> : firebaseErr ? <font className="auth__form-err">{firebaseErr}</font> : null}
                <Link to='/reset-password' className="password-reset">Reset Password</Link>
                <CtaBtn btnText="submit" action={validateLoginForm} />
        </AuthForm>
    )
}