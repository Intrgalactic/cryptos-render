import { LoginForm } from "components/login-form";
import { SectionHeading } from "components/section-heading";
import Header from "layouts/header";
import Loader from "layouts/loader";
import { Suspense } from "react";

export default function Login() {
    return (
        <Suspense fallback={<Loader />}>
            <Header />
            <div className="login-app">
                <SectionHeading heading={["login to your account"]} />
                <div className="login__section">
                    <LoginForm />
                </div>
            </div>
        </Suspense>
    )
}