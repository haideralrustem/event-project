import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false);
    const handleMenuClick = () => {
        if (click === false){
            setClick(true);
        }
        else {
            setClick(false);
        }
    }

    const closeMobileMenu = () => {
        setClick(false);
    }


    const responsiveNavBar = () => {
        if (window.innerWidth <= 960 ){
            
        }
    }
    window.addEventListener('resize', responsiveNavBar)


    return (
        <>

        <nav className='navbar'>
            <div className='navbar-container'>

                <div className='navbar-logo-wrap'>
                    <Link to='/' className='navbar-logo'>
                        EVEntor <i class="fab fa-typo3"></i>
                    </Link>
                </div>
                            


                <ul className={click ?  'nav-menu active' : 'nav-menu' }>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/events_search' className='nav-links' onClick={closeMobileMenu}>
                            Search for events
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/events_listing' className='nav-links' onClick={closeMobileMenu}>
                            Listings
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                </ul>

                <div className='menu-icon' onClick={handleMenuClick}>
                    <i className={ click ? 'fa fa-times' : 'fa fa-bars'}></i>
                </div>

                
            </div>

        </nav>
        </>
    )
}

export default Navbar
