import vector from './vector.png'
import logo from './exclusive.png'; 
import hearth from './hearth.png'
import cart1 from './cart1.png'
import search from './search.png'
import './Header.css';
const Header = ()=>{
    return(
        <header>    
            <div className="top-header">
                <div className="top-header-content">
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='top-header-content-shop-now'>Shop Now</span>
                </div>
                <div className="top-header-select">
                    <div className='select-content'>English </div>
                    <div className="dropdown-icon"><img src={vector}/></div>
                </div>
            </div>
            <div className="bottom-header">
                <div className='logo'><img src={logo}/></div>
                <div className='bottom-header-shop-menu'>
                    <div className='bottom-header-shop-menu-button'>Home</div>
                    <div className='bottom-header-shop-menu-button'>Contact</div>
                    <div className='bottom-header-shop-menu-button'>About</div>
                    <div className='bottom-header-shop-menu-button'>Sign Up</div>
                </div>
                <div className='bottom-header-user-menu'>
                    <div className='bottom-header-user-menu-search-bar-box'>
                        <div className='search-box'><input className='search-bar' placeholder='What are you looking for?'></input></div>
                        <div className='search-image'><img src={search} className='search-img'/></div>
                    </div>
                    <div className='bottom-header-user-menu-wishlist'><img src={hearth}/></div>
                    <div className='bottom-header-user-menu-cart'><img src={cart1}/></div>
                </div>
            </div>
        </header>
    )
}
export default Header