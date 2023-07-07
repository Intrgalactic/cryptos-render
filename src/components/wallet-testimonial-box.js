import user from 'assets/images/user.png';
import { WalletTestimonialUserData } from './wallet-testimonial-user-data';

export function WalletTestimonialBox({userName,userDescription}) {
    return (
        <div className="wallet__testimonial-box">
            <img src={user} alt="user face"/>
            <WalletTestimonialUserData userName={userName} userDescription={userDescription}/>
        </div>
    )
}