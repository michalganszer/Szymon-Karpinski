import React from 'react';
import{ NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import facebook from '../../assets/images/social/facebook.png';
import instagram from '../../assets/images/social/instagram.png';
import { LanguageContext } from '../../contexts/LanguageContext';

const Menu = ({openClose}) =>(
<LanguageContext.Consumer>{(context)=>{
    const {setPL, setEN} = context;
        return(
            <nav>
                <ul className={styles.navItems}>
                    <li onClick={openClose} className={styles.navItem}><NavLink className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to="/madeira">Madeira</NavLink></li>
                    <li onClick={openClose} className={styles.navItem}><NavLink className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to="/Nieuchronne-straty-i-wartościowe-zmiany">Nieuchronne straty i wartościowe zmiany</NavLink></li>
                    <li onClick={openClose} className={styles.navItem}><NavLink className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to="/teksty">Teksty</NavLink></li>
                    <li onClick={openClose} className={styles.navItem}><NavLink className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to="/bio">Bio</NavLink></li>
                    <li onClick={openClose} className={styles.navItem}><NavLink className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to="/kontakt">Kontakt</NavLink></li>
                </ul>
                <div className={styles.socialIcons}>
                    <img src={instagram}></img>
                    <img src={facebook}></img>
                </div>
                
                <div className={styles.language}>
                    <button onClick={setPL}>pl</button><span>|</span><button onClick={setEN}>en</button>
                </div>
            </nav>

            )
        }}
    </LanguageContext.Consumer>
);

export default Menu;