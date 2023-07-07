
export function WalletTestimonialUserData({ userName, userDescription }) {
    return (
        <div className="wallet__testimonial-box-data">
            <h3>{userName}</h3>
            <p>{userDescription}</p>
        </div>
    )
}