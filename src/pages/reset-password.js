import { AuthForm } from "components/auth-form";
import { CtaBtn } from "components/cta-btn";
import { SectionHeading } from "components/section-heading";
import { SectionLeftBlock } from "components/section-left-block";
import { SectionRightBlock } from "components/section-right-block";
import Header from "layouts/header";
import Loader from "layouts/loader";
import { Suspense, useContext, useEffect, useRef, useState } from "react";
import { getFirebaseErr, setSessionStorageItem, validateForm, validatePassword } from "utils/utilities";
import { auth } from "firebase.js";
import { useLocation, useNavigate } from "react-router-dom";
import useSessionStorage from "hooks/useSessionStorage";
import { EmailAuthProvider, isSignInWithEmailLink, onAuthStateChanged, reauthenticateWithCredential, sendPasswordResetEmail, sendSignInLinkToEmail, signInWithEmailAndPassword, signInWithEmailLink, updatePassword } from "firebase/auth";
import { authContext } from "context/authContext";
import resetPassword from 'assets/images/password-bg.png';
import webpResetPassword from 'assets/images/password-bg.webp';
import { Picture } from "components/picture";

export default function PasswordReset() {
    const authProps = useContext(authContext);
    const isLogged = authProps.isLogged;
    const [isAuthorizedWithEmail, setIsAuthorizedWithEmail] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const search = new URLSearchParams(location.search);
    const [successState, setSuccessState] = useState();
    const emailRef = useRef();
    const passwordRef = useRef();
    const newPasswordRef = useRef();
    const secondNewPasswordRef = useRef();
    const [validateErr, setValidateErr] = useState();
    function validatePasswordForm(e) {
        const userDataRef = {
            email: typeof(emailRef.current) === "object" ? emailRef.current.value : emailRef.current,
            password: isLogged ? typeof(passwordRef.current) === "object" ? passwordRef.current.value : passwordRef.current : null,
            newPassword: typeof(newPasswordRef.current) === "object" ? newPasswordRef.current.value : newPasswordRef.current,
            secondNewPassword: typeof(secondNewPasswordRef.current) === "object" ? secondNewPasswordRef.current.value : secondNewPasswordRef.current,
        }
        const credentials = EmailAuthProvider.credential(userDataRef.email, userDataRef.password);
        e.preventDefault();
        if (successState) {
            navigate('/dashboard');
            return false;
        }
        if (validateForm(userDataRef,setValidateErr)) {
            if (userDataRef.newPassword !== userDataRef.secondNewPassword) {
                setValidateErr("The passwords are different!");
                return false;
            }
            else {
                if (!isLogged) {
                    if (!isAuthorizedWithEmail) {
                        if (validatePassword(userDataRef.newPassword, setValidateErr)) {
                            authorizeUserWithEmail(userDataRef);
                        }
                        else {
                            return false;
                        }
                    }
                }
                else if (isLogged) {
                    if (!auth.currentUser.emailVerified) {
                        setValidateErr('Your e-mail is not verified');
                        return false;
                    }
                    reauthenticateWithCredential(auth.currentUser, credentials).then(() => {
                        if (validatePassword(userDataRef.newPassword, setValidateErr)) {
                            updateUserPassword(userDataRef);
                        }
                    }).catch(err => {
                        getFirebaseErr(err.message, setValidateErr);
                        console.log(err);
                    })
                }
            }
            setValidateErr(false);
            return true;
        }
    }
    function authorizeUserWithEmail(userDataRef) {
        sendPasswordResetEmail(auth, userDataRef.email).then(() => {
            setSuccessState("Verify mail has been sent to your inbox");
        }).catch(err => {
            getFirebaseErr(err.message, setValidateErr);
        })
    }
    function updateUserPassword(userDataRef) {
        if (userDataRef.password !== userDataRef.newPassword) {
            updatePassword(auth.currentUser, userDataRef.newPassword).then(() => {
                setSuccessState("Password updated");

            }).catch(err => {
                getFirebaseErr(err.message, setValidateErr);
            })
        }
        else {
            setValidateErr("New password must be different than the latest");
        }
    }

    return (
        <Suspense fallback={<Loader />}>
            <Header />
            <div className="reset-password-app">
                <SectionLeftBlock class="password-reset__left-block">
                    <Picture images={[resetPassword, webpResetPassword]}>
                        <img src={resetPassword} alt="password reset" />
                    </Picture>
                </SectionLeftBlock>
                <SectionRightBlock class="password-reset__right-block">
                    <SectionHeading heading={["Reset your password"]} />
                    <AuthForm formClass="password-form">
                        <input type="email" required onChange={(e) => emailRef.current = e.target.value} placeholder="Enter your e-mail" value={auth.currentUser && auth.currentUser.email} ref={emailRef} defaultValue=""/>
                        {isLogged && <input type="password" required onChange={(e) => passwordRef.current = e.target.value} ref={passwordRef} placeholder="Enter your password" defaultValue={isLogged ? search.get("oldPassword") && search.get("oldPassword") : ""} />}
                        <input type="password" required onChange={(e) => newPasswordRef.current = e.target.value} ref={newPasswordRef} placeholder="Enter new password" defaultValue={isLogged ? search.get("newPassword") && search.get("newPassword") : ""}/>
                        <input type="password" required onChange={(e) => secondNewPasswordRef.current = e.target.value} ref={secondNewPasswordRef} placeholder="Enter new password again" defaultValue={isLogged ? search.get("newPassword") && search.get("newPassword") : ""}/>
                        {validateErr ? <font className="auth__form-err">{validateErr}</font> : successState && <font className="auth__form-success">{successState}</font>}
                        <CtaBtn btnText={isLogged ? "Reset" : isAuthorizedWithEmail ? "Reset" : "Authorize"} action={validatePasswordForm} />
                    </AuthForm>
                </SectionRightBlock>
            </div>
        </Suspense>
    )
}