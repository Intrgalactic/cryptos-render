
export function WalletTestimonialUserData({ userName, userDescription }) {
    return (
        <div className="wallet__testimonial-box-data">
            <h4>{userName}</h4>
            <p>{userDescription}</p>
        </div>
    )
}