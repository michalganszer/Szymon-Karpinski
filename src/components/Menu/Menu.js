/* eslint-disable */
import React, { useEffect, useState} from 'react';
import{ NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import instagram from '../../assets/images/social/instagram.svg';
import { LanguageContext } from '../../contexts/LanguageContext';

const Menu = ({openClose, items, edycje}) =>{

    const [isEdycjeOpen, setEdycjes] = useState(false);
    const openEdycje = () =>{
        setEdycjes(!isEdycjeOpen);
            }
    return(
<LanguageContext.Consumer>{(context)=>{
    const {setPL, setEN, isPL} = context;
        return(
            <nav className={styles.menu}>
                <ul className={styles.navItems}>
                    
                    {items && items.map((item, i) => (<li key={i} onClick={openClose} className={styles.navItem}><NavLink className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to={'/' + (item.name.replace(/\s+/g, '-').toLowerCase())}>{isPL ? item.name : item.nameEn}</NavLink></li>) )}
                    
                    {/*<li onClick={openClose} className={styles.navItem}><NavLink className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to="/teksty">Teksty</NavLink></li>*/}
                    <li onClick={openClose} className={styles.navItem}><NavLink className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to="/bio">Bio</NavLink></li>
                    <li onClick={openClose} className={styles.navItem}><NavLink className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to="/kontakt">{isPL ? 'Kontakt' : 'Contact'}</NavLink></li>
                    <div>
                        <li onClick={openEdycje} className={styles.navItem}>{isPL? 'Sklep' : 'Shop'}</li>
                        <div className={styles.edycje}>
                            {isEdycjeOpen && edycje && edycje.map((edycja, i) => (<li key={i} onClick={openClose} className={styles.navItem}><NavLink className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to={'/sklep/' + (edycja.nazwa.replace(/\s+/g, '-').replace(/\(|\)/g,'').replace(/ą/g, 'a').replace(/Ą/g, 'A')
                              .replace(/ć/g, 'c').replace(/Ć/g, 'C')
                              .replace(/ę/g, 'e').replace(/Ę/g, 'E')
                              .replace(/ł/g, 'l').replace(/Ł/g, 'L')
                              .replace(/ń/g, 'n').replace(/Ń/g, 'N')
                              .replace(/ó/g, 'o').replace(/Ó/g, 'O')
                              .replace(/ś/g, 's').replace(/Ś/g, 'S')
                              .replace(/ż/g, 'z').replace(/Ż/g, 'Z')
                              .replace(/ź/g, 'z').replace(/Ź/g, 'Z').toLowerCase())}>{isPL ? edycja.nazwa : edycja.nazwaEn}</NavLink></li>) )}
                        </div>
                    </div>
                </ul>
                <div className={styles.socialIcons}>
                    <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/szymekarpinski/'><img src={instagram} alt="Instagram"></img></a>
                </div>
                
                <div className={styles.language}>
                    <button onClick={setPL}>pl</button><span>|</span><button onClick={setEN}>en</button>
                </div>
            </nav>

            )
        }}
    </LanguageContext.Consumer>
)};

export default Menu;