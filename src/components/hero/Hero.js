import rightvector from './right_vector.png' 
import heroimage from './hero_endframe_large2.png'
import apple from'./apple_gray_logo1.png'
import herovector from './hero_vector.png'
import './Hero.css'
const Hero = ()=>{
    return(
        <div className="hero">
            <div className="hero-menu">
                <div className="hero-menu-button">
                    <div className="hero-menu-button-content">Woman's Fashion</div>
                    <div className="hero-menu-button-vector"><img src={rightvector}/></div>
                    </div>
                <div className="hero-menu-button">
                <div className="hero-menu-button-content">Men's Fashion</div>
                <div className="hero-menu-button-vector"><img src={rightvector}/></div>
                </div>
                <div className="hero-menu-button"><div className="hero-menu-button-content">Electronics</div></div>
                <div className="hero-menu-button"><div className="hero-menu-button-content">Home & Lifestyle</div></div>
                <div className="hero-menu-button"><div className="hero-menu-button-content">Medicine</div></div>
                <div className="hero-menu-button"><div className="hero-menu-button-content">Sport & Outdoor</div></div>
                <div className="hero-menu-button"><div className="hero-menu-button-content">Baby's & Toys</div></div>
                <div className="hero-menu-button"><div className="hero-menu-button-content">Groceries & Pets</div></div>
                <div className="hero-menu-button"><div className="hero-menu-button-content">Health & Beauty</div></div>
            </div>
            <div className="hero-box">
                    <div className="hero-box-desc">
                        <div className='hero-box-title'>
                            <div className='hero-box-title-image'><img src={apple}/></div>
                            <div className='hero-title'>iPhone 14 Series</div>
                        </div>
                        <div className='hero-box-content'>
                            <div>Up to 10%</div>
                            <div>off Voucher</div>
                        </div>
                        <div className='hero-box-button'>
                            <div className='hero-box-button-content'>Shop now</div>
                            <div className='hero-box-button-image'><img src={herovector}/></div>
                        </div>
                    </div>
                    <div className="hero-box-images"><img src={heroimage}/></div>
            </div>
        </div>
    )
}
export default Hero