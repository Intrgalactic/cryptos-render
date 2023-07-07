import { Link } from "react-router-dom";

export function CustomBtn({btnText,redirect}) {
    return (
        <div class="custom-btn">
            <Link to={redirect}>{btnText}</Link>
        </div>
    )
}