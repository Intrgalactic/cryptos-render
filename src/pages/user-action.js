import { AuthForm } from "components/auth-form";
import { CtaBtn } from "components/cta-btn";
import { SectionHeading } from "components/section-heading";
import { auth } from 'firebase.js';
import Header from "layouts/header";
import { verifyPasswordResetCode, confirmPasswordReset, applyActionCode } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { Suspense, useEffect, useRef, useState } from "react";
import { getFirebaseErr, isEqual, validateForm, validatePassword } from "utils/utilities";
import Loader from "layouts/loader";

export default function UserAction() {
    const search = new URLSearchParams(useLocation().search);
    const actionCode = search.get('oobCode');
    const mode = search.get('mode');
    const navigate = useNavigate();
    const [validateErr, setValidateErr] = useState();
    const [firebaseErr, setFirebaseErr] = useState();
    const [successState, setSuccessState] = useState();
    const [emailToReset, setEmailToReset] = useState();
    const [isEmailVerified, setIsEmailVerified] = useState();
    const userDataRef = useRef({});
    const passwordsRef = useRef({
        newPassword: "",
        repeatedPassword: ""
    })
    useEffect(() => {
        switch (search.get("mode")) {
            case "resetPassword": verifyPasswordResetCode(auth, actionCode).then((email) => {
                setEmailToReset(email);
            }).catch(err => {
                checkIsCodeGood(err.message);
            })
                break;
            case "verifyEmail": verifyUserEmail();
                break;
            default: navigate('/');
        }
    }, [setEmailToReset]);

    function resetUserPassword(e) {
        e.preventDefault();
        if (validateForm(passwordsRef.current, setValidateErr) && validatePassword(passwordsRef.current.newPassword, setValidateErr)) {
            if (!isEqual(passwordsRef.current.newPassword, passwordsRef.current.repeatedPassword)) {
                setValidateErr("The passwords don't match");
            }
            else {
                confirmPasswordReset(auth, actionCode, passwordsRef.current.newPassword).then(() => {
                    setSuccessState("Password updated");
                }).catch(err => {
                    getFirebaseErr(err.message, setFirebaseErr);
                })
            }
        }
    }

    function verifyUserEmail() {
        applyActionCode(auth, actionCode).then(() => {
            setIsEmailVerified(true);
        }).catch(err => {
            checkIsCodeGood(err.message);
        })
    }
    console.log(isEmailVerified);
    function checkIsCodeGood(err) {
        if (err === "Firebase: Error (auth/invalid-action-code)." || (err === "Firebase: Error (auth/internal-error)." && !isEmailVerified)) {
            setTimeout(() => {
                navigate('/log-in');
            },10000);
        }
        else {
            getFirebaseErr(err, setFirebaseErr);
        }
    }
    return (
        <Suspense fallback={<Loader />}>
            <div className="user-action-app">
                <Header />
                {mode === "resetPassword" ?
                    <>
                        <SectionHeading heading={["Confirm password reset"]} />
                        <AuthForm formClass="confirm-password-reset-form">
                            <p className="user-action-type">Reset password for {emailToReset}</p>
                            <input type="password" placeholder="enter new password" onChange={(e) => passwordsRef.current.newPassword = e.target.value} />
                            <input type="password" placeholder="repeat new password" onChange={(e) => passwordsRef.current.repeatedPassword = e.target.value} />
                            {validateErr ? <font className="auth__form-err">{validateErr}</font> : firebaseErr ? <font className="auth__form-err">{firebaseErr}</font> : successState && <font className="auth__form-success">{successState}</font>}
                            <CtaBtn btnText="Reset" action={resetUserPassword} />
                        </AuthForm>
                    </> : mode === "verifyEmail" &&
                    <>
                        {isEmailVerified &&
                            <>
                                <SectionHeading heading={["Your e-mail has been verified"]} />
                                <CtaBtn btnText="Login" action={() => navigate('/log-in')} />
                            </>
                        }
                    </>
                }
            </div>
        </Suspense>
    )
}