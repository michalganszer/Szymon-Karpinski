import React from 'react';
import MediaQuery, { useMediaQuery }  from 'react-responsive';
import styles from './Header.module.scss'
import Hamburger from './Hamburger/Hamburger';
import H1 from './H1/H1';

const Header = ({openClose, modalState}) =>{
    const isPortrait = useMediaQuery ({ query: '(orientation: portrait)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 899px)' })

    return(
    <header className={styles.header}>
        
        <H1/>
        
        {(isPortrait || isTabletOrMobile) && <Hamburger modalState={modalState} openClose={openClose} />}
        
    </header>
    
)};

export default Header;