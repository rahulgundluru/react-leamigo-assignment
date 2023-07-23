import './header.css'



const Header = () => {
    return (
        <nav className="div-cont">
            <div className="heading-div-cont">
                <div>
                    {/* <img src="https://res.cloudinary.com/dgwskqa59/image/upload/v1690133673/uvrdkn8i3givg9go1pkt.png" alt="img-logo" /> */}
                    <a href="/" className='heading'>RAHUL CABS</a>
                </div>
                
                <div className='sub-div-cont'>
                    <a href="/" className='nav-sub-anchor'>Destinations</a>
                    <a href="/" className='nav-sub-anchor'>My Bookings</a>
                    <a href="/" className='nav-sub-anchor'>Travel Agency</a>
                    <a href="/" className='nav-sub-anchor'>Help Center</a>
                    <button className='btn'>Login</button>
                </div>
                
            </div>
            
        </nav>
    )
}

export default Header 