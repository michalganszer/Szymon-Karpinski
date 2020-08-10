import React from 'react';
import MediaQuery from 'react-responsive';
import styles from './Header.module.scss'
import Hamburger from './Hamburger/Hamburger';
import H1 from './H1/H1';

const Header = ({openClose, modalState}) =>(
<header className={styles.header}>
    
     <H1/>
    
    <MediaQuery maxWidth={899}>
        <Hamburger modalState={modalState} openClose={openClose} />
    </MediaQuery>
</header>
    
);

export default Header;