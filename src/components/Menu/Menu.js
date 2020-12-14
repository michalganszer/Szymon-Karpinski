import React from 'react';
import{ NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import facebook from '../../assets/images/social/facebook.svg';
import instagram from '../../assets/images/social/instagram.svg';
import { LanguageContext } from '../../contexts/LanguageContext';

const Menu = ({openClose, items}) =>(
<LanguageContext.Consumer>{(context)=>{
    const {setPL, setEN} = context;
        return(
            <nav className={styles.menu}>
                <ul className={styles.navItems}>
                    
                    {items && items.map((item, i) => (<li key={i} onClick={openClose} className={styles.navItem}><NavLink className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to={'/' + (item.name.replace(/\s+/g, '-').toLowerCase())}>{item.name}</NavLink></li>) )}
                    
                    {/*<li onClick={openClose} className={styles.navItem}><NavLink className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to="/teksty">Teksty</NavLink></li>*/}
                    <li onClick={openClose} className={styles.navItem}><NavLink className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to="/bio">Bio</NavLink></li>
                    <li onClick={openClose} className={styles.navItem}><NavLink className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to="/kontakt">Kontakt</NavLink></li>
                </ul>
                <div className={styles.socialIcons}>
                    <a target='_blank' href='https://www.instagram.com/szymekarpinski/'><img src={instagram}></img></a>
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