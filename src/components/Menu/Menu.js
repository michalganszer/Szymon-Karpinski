import React from 'react';
import{ NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import facebook from '../../assets/images/social/facebook.png';
import instagram from '../../assets/images/social/instagram.png';

const Menu = ({openClose}) =>(
<nav>
    <ul className={styles.navItems}>
        <li onClick={openClose} className={styles.navItem}><NavLink className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to="/madeira">Madeira</NavLink></li>
        <li onClick={openClose} className={styles.navItem}><NavLink className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to="/Nieuchronne-straty-i-wartościowe-zmiany">Nieuchronne straty i wartościowe zmiany</NavLink></li>
        <li onClick={openClose} className={styles.navItem}><NavLink className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to="/teksty">Teksty</NavLink></li>
        <li onClick={openClose} className={styles.navItem}><NavLink className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to="/bio">Bio</NavLink></li>
        <li onClick={openClose} className={styles.navItem}><NavLink className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to="/kontakt">Kontakt</NavLink></li>
    </ul>
    <div className={styles.socialIcons}>
    <img src={facebook}></img>
    <img src={instagram}></img>
    </div>
    
</nav>
);

export default Menu;