import { useRef, useState } from "react";
import { CtaBtn } from "./cta-btn";
import { createUserWithEmailAndPassword, deleteUser, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from "firebase.js";
import { useNavigate } from "react-router-dom";
import { validateForm, validatePassword } from "utils/utilities";
import { AuthForm } from "./auth-form";
import { getFirebaseErr } from "utils/utilities";
export function RegisterForm() {
    const userPersonalData = useRef({
        name: "",
        lastName: "",
        nickName: "",
        email: "",
        password: "",

    })
    const checkBoxRef = useRef();
    const navigate = useNavigate();
    const [validateErr, setValidateErr] = useState();
    const [firebaseErr, setFirebaseError] = useState();
    const [successState, setSuccessState] = useState();
    function validateRegisterForm(e) {
        e.preventDefault();
        if (validateForm(userPersonalData.current,setValidateErr) && validatePassword(userPersonalData.current.password, setValidateErr)) {
            if (checkBoxRef.current.checked === false) {
                setValidateErr("You must agree with our rules");
                return false;
            }
            createAccount();
            return true;
        }
    }
    function createAccount() {
        createUserWithEmailAndPassword(auth, userPersonalData.current.email, userPersonalData.current.password).then(() => {
            fetch(`${process.env.REACT_APP_FETCH_URL}create-user?name=${userPersonalData.current.name}&lastName=${userPersonalData.current.lastName}&email=${userPersonalData.current.email}`)
                .then(response => {
                    if (response.status !== 201) {
                        throw Error("Failed To Create Account");
                    }
                    else if (response.status === 201) {

                    }
                })
                .catch(err => {
                    deleteUser(auth.currentUser).catch(error => {
                        getFirebaseErr(error.message, setFirebaseError);
                    })
                    setValidateErr(err.message);
                });
        }).then(() => {
            sendEmailVerification(auth.currentUser).then(() => {
                setValidateErr(false);
                setSuccessState("We sent a verify mail to your inbox");
            })
                .catch((err) => {
                    getFirebaseErr(err.message, setFirebaseError);
                })
            updateProfile(auth.currentUser, { displayName: userPersonalData.current.nickName }).catch(err => {
                getFirebaseErr(err.message, setFirebaseError);
            })
        }).catch((err) => {
            const errorMessage = err.message
            getFirebaseErr(errorMessage, setFirebaseError);
        })
    }
    return (
        <AuthForm formClass="register__form">
            <input type="text" placeholder="your name" required onChange={(e) => { userPersonalData.current.name = e.target.value }} />
            <input type="text" placeholder="your lastname" required onChange={(e) => { userPersonalData.current.lastName = e.target.value }} />
            <input type="text" placeholder="your nickname" required onChange={(e) => { userPersonalData.current.nickName = e.target.value }} />
            <input type="email" placeholder="your email" required onChange={(e) => { userPersonalData.current.email = e.target.value }} />
            <input type="password" placeholder="your password" required onChange={(e) => { userPersonalData.current.password = e.target.value }} />
            <input type="text" placeholder="referral code ( optional )" optional />
            <label for="agree-checkbox">
                <input type="checkbox" required name="agree-checkbox" id="agree-checkbox" ref={checkBoxRef} />
                <p>I HAVE READ AND AGREE TO THE WEBSITE TERMS AND CONDITIONS</p>
            </label>
            {validateErr ? <font className="auth__form-err">{validateErr}</font> : firebaseErr ? <font className="auth__form-err">{firebaseErr}</font> : successState && <font className="auth__form-success">{successState}</font>}
            <CtaBtn btnText="submit" action={validateRegisterForm} />
        </AuthForm>
    )
}