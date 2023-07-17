import DashboardRow from "layouts/dashboard-row";
import DashboardTemplate from "layouts/dashboard-template";
import userFace from 'assets/images/user-image-example.png';
import { auth } from "firebase.js";
import { DetailsContainer } from "components/data-details-container";
import { useEffect, useRef, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { DashboardBox } from "components/dashboard-box";
import { PnlChart } from "components/user-pnl-chart";
import { validateForm, validatePassword } from "utils/utilities";
import { useNavigate } from "react-router-dom";

export default function Settings() {
    const [userDetails, setUserDetails] = useState({});
    const passwordsRef = useRef({
        password: "",
        newPassword: ""
    });
    const navigate = useNavigate();
    const [validateErr, setValidateErr] = useState();
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                console.log(`${process.env.REACT_APP_FETCH_URL}get-user?email=${user.email}`);
                await fetch(`${process.env.REACT_APP_FETCH_URL}get-user?email=${user.email}`)
                    .then((response) => response.json())
                    .then(data => {
                        setUserDetails({
                            displayName: user.displayName,
                            email: user.email,
                            name: data.name,
                            lastName: data.lastName
                        })
                    }).catch(err => {
                        console.log(err);
                    })
            }
            else {
                console.log('not')
            }
        })

    }, []);
    function resetPassword(e) {
        e.preventDefault();
        if (validateForm(passwordsRef.current, setValidateErr) && validatePassword(passwordsRef.current.newPassword, setValidateErr) && validatePassword(passwordsRef.current.password, setValidateErr)) {
            if (passwordsRef.current.password === passwordsRef.current.newPassword) {
                setValidateErr("new password must be different");
                return false;
            }
            navigate(`/reset-password?oldPassword=${passwordsRef.current.password}&newPassword=${passwordsRef.current.newPassword}`);
        }
    }
    return (
        <div className="settings">
            <DashboardTemplate>
                <DashboardRow rowClass="dashboard-first-row">
                    <DashboardBox boxHeading="account details" boxName="data-details">
                        <DetailsContainer heading={userDetails.displayName} image={userFace} alt="user details" dataArr={
                            [["E-Mail: ", userDetails.email],
                            ["Name: ", userDetails.name], ["Last Name: ", userDetails.lastName]]} />
                    </DashboardBox>
                    <DashboardBox boxHeading="change password" boxName="dashboard-password-change">
                        <form className="dashboard-change-password-form">
                            <input type="password" placeholder="YOUR PASSWORD" onChange={(e) => { passwordsRef.current.password = e.target.value }} />
                            <input type="password" placeholder="NEW PASSWORD" onChange={(e) => { passwordsRef.current.newPassword = e.target.value }} />
                            {validateErr && <p className="auth__form-err">{validateErr}</p>}
                            <button type="submit" onClick={resetPassword}>Change</button>
                        </form>
                    </DashboardBox>
                </DashboardRow>
                <DashboardRow rowClass="dashboard-second-row">
                    <PnlChart />
                </DashboardRow>
            </DashboardTemplate>
        </div>
    )
}