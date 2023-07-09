import user from 'assets/images/user.png';
import webpUser from 'assets/images/user.webp';
import { WalletTestimonialUserData } from './wallet-testimonial-user-data';
import { Picture } from './picture';

export function WalletTestimonialBox({ userName, userDescription }) {
    return (
        <div className="wallet__testimonial-box">
            <Picture images={[user, webpUser]}>
                <img src={webpUser} alt="user face" />
            </Picture>
            <WalletTestimonialUserData userName={userName} userDescription={userDescription} />
        </div>
    )
}