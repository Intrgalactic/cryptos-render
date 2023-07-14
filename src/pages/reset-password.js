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
    const userDataRef = useRef({
        email: "",
        password: null,
        newPassword: "",
        secondNewPassword: "",
    })
    const [validateErr, setValidateErr] = useState();
    function validatePasswordForm(e) {
        const credentials = EmailAuthProvider.credential(userDataRef.current.email, userDataRef.current.password);
        e.preventDefault();
        if (successState) {
            navigate('/dashboard');
            return false;
        }
        if (validateForm(userDataRef.current,setValidateErr)) {
            if (userDataRef.current.newPassword !== userDataRef.current.secondNewPassword) {
                setValidateErr("The passwords are different!");
                return false;
            }
            else {
                if (!isLogged) {
                    if (!isAuthorizedWithEmail) {
                        if (validatePassword(userDataRef.current.newPassword, setValidateErr)) {
                            authorizeUserWithEmail();
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
                        if (validatePassword(userDataRef.current.newPassword, setValidateErr)) {
                            updateUserPassword();
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
    function authorizeUserWithEmail() {
        sendPasswordResetEmail(auth, userDataRef.current.email).then(() => {
            setSuccessState("Verify mail has been sent to your inbox");
        }).catch(err => {
            getFirebaseErr(err.message, setValidateErr);
        })
    }
    function updateUserPassword() {
        if (userDataRef.current.password !== userDataRef.current.newPassword) {
            updatePassword(auth.currentUser, userDataRef.current.newPassword).then(() => {
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
                        <input type="email" required onChange={(e) => userDataRef.current.email = e.target.value} placeholder="Enter your e-mail" />
                        {isLogged && <input type="password" required onChange={(e) => userDataRef.current.password = e.target.value} placeholder="Enter your password" />}
                        <input type="password" required onChange={(e) => userDataRef.current.newPassword = e.target.value} placeholder="Enter new password" />
                        <input type="password" required onChange={(e) => userDataRef.current.secondNewPassword = e.target.value} placeholder="Enter new password again" />
                        {validateErr ? <font className="auth__form-err">{validateErr}</font> : successState && <font className="auth__form-success">{successState}</font>}
                        <CtaBtn btnText={isLogged ? "Reset" : isAuthorizedWithEmail ? "Reset" : "Authorize"} action={validatePasswordForm} />
                    </AuthForm>
                </SectionRightBlock>
            </div>
        </Suspense>
    )
}