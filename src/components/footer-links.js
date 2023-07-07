import { Link } from "react-router-dom"

export function FooterLinks({column,links}) {
    return (
        <div className="footer__links-column">
            <p>{column}</p>
            {links.map((link,index) => (
                <Link key={index}>{link}</Link>
            ))}
        </div>
    )
}