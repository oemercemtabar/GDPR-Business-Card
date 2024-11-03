import React, { useState, useEffect } from 'react';
import { HomeButtonSignIn } from '../Home/HomeButtonSignIn';
import { HomeButtonSignUp } from '../Home/HomeButtonSignUp';
import { Link } from 'react-router-dom';
import '../Home/HomeNavBar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        KARTVIZIT
                        <i class='fab fa-typo3' />
                    </Link>

                    <Link to='/sign-up'  onClick={closeMobileMenu}>
                        <HomeButtonSignUp buttonStyle='btn--outline'>KAYIT OL</HomeButtonSignUp>
                        
                    </Link>

                    <Link to='/sign-in'  onClick={closeMobileMenu}>
                        <HomeButtonSignIn buttonStyle='btn--outline'>GİRİS YAP</HomeButtonSignIn>
                        
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    
                </div>
            </nav>
        </>
    );
}

export default Navbar;