import { useRef, useState } from "react";
import { CtaBtn } from "./cta-btn";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebase.js";
import { useNavigate } from "react-router-dom";

export function RegisterForm() {
    const userPersonalData = useRef({
        name: "",
        lastName: "",
        email: "",
        password: "",
    })
    const navigate = useNavigate();
    const emailRegEx = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);
    const passwordRegEx = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
    const numberRegEx = new RegExp(/(?=.*?[0-9])/);
    const specialCharRegEx = new RegExp(/(?=.*?[#?!@$%^&*-])/);
    const lowLetterRegEx = new RegExp(/(?=.*?[a-z])/);
    const upperLetterRegEx = new RegExp(/(?=.*?[A-Z])/);
    const [validateErr, setValidateErr] = useState();
    const [firebaseErr, setFirebaseError] = useState();
    function validateForm(e) {
        e.preventDefault();
        for (const [key, value] of Object.entries(userPersonalData.current)) {
            if (value === "") {
                console.log(key);
                setValidateErr(`Empty ${key}`);
                return false;
            }
        }
        if (!emailRegEx.test(userPersonalData.current.email)) {
            setValidateErr('Wrong E-mail Format');
            return false;
        }
        if (!passwordRegEx.test(userPersonalData.current.password)) {
            if (userPersonalData.current.password.length < 8) {
                setValidateErr("Too short password");
                return false;
            }
            if (!numberRegEx.test(userPersonalData.current.password)) {
                setValidateErr("Password must contain atleast one digit");
                return false;
            }
            if (!specialCharRegEx.test(userPersonalData.current.password)) {
                setValidateErr("Password must contain atleast one special character");
                return false;
            }
            if (!lowLetterRegEx.test(userPersonalData.current.password)) {
                setValidateErr("Password must contain atleast one low character");
                return false;
            }
            if (!upperLetterRegEx.test(userPersonalData.current.password)) {
                setValidateErr("Password must contain atleast one uppercase character");
                return false;
            }
        }
        setValidateErr(false);
        createAccount();
        return true;
    }
    function createAccount() {
        createUserWithEmailAndPassword(auth, userPersonalData.current.email, userPersonalData.current.password).then(async (userCredentials) => {
            await fetch(`${process.env.REACT_APP_FETCH_URL}create-user?name=${userPersonalData.current.name}&lastName=${userPersonalData.current.lastName}&email=${userPersonalData.current.email}`)
                .then(response => {
                    if (response.status !== 201) {
                        throw Error("Failed To Create Account");
                    }
                    else if (response.status === 20) {
                    
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }).catch((err) => {
            const errorMessage = err.message
            switch (errorMessage) {
                case "Firebase: Error (auth/wrong-password).": setFirebaseError("Wrong password");
                    break;
                case "Firebase: Error (auth/invalid-email).": setFirebaseError("Invalid e-mail");
                    break;
                case "Firebase: Password should be at least 6 characters (auth/weak-password).": setFirebaseError("The password is too weak (insert atleast 6 characters)");
                    break;
                case "Firebase: Error (auth/email-already-in-use).": setFirebaseError("The e-mail is already in use");
                    break;
                default: setFirebaseError("An error occured, please try again.")
            }
        })
    }
    return (
        <div className="register__form">
            <form>
                <input type="text" placeholder="your name" required onChange={(e) => { userPersonalData.current.name = e.target.value }} />
                <input type="text" placeholder="your lastname" required onChange={(e) => { userPersonalData.current.lastName = e.target.value }} />
                <input type="email" placeholder="your email" required onChange={(e) => { userPersonalData.current.email = e.target.value }} />
                <input type="password" placeholder="your password" required onChange={(e) => { userPersonalData.current.password = e.target.value }} />
                <input type="text" placeholder="referral code ( optional )" optional />
                <label for="agree-checkbox">
                    <input type="checkbox" required name="agree-checkbox" id="agree-checkbox" />
                    <p>I HAVE READ AND AGREE TO THE WEBSITE TERMS AND CONDITIONS</p>
                </label>
                {validateErr ? <font className="register__form-err">{validateErr ? validateErr : firebaseErr}</font> : firebaseErr && <font className="register__form-err">{validateErr ? validateErr : firebaseErr}</font>}
                <CtaBtn btnText="submit" action={validateForm} />
            </form>
        </div>
    )
}