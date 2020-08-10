import React from 'react';
import styles from './Kontakt.module.scss';
import { LanguageContext } from '../../contexts/LanguageContext';

const Kontakt = () =>(

    <LanguageContext.Consumer>{(context)=>{
        return(
            <>
            {context.isPL ? <PL/> : <EN/>}
            </>        
        )
    }}

    </LanguageContext.Consumer>

);

const PL = () =>(
    <div className={styles.kontakt}>
               
    <div>karpinski_szymon@wp.pl</div>
        <a href="tel:+48514942473"> (+48) 514-942-473</a>
    <p>Szymon Karpiński ©  2020</p>
 </div>
)

const EN = () =>(
    <div className={styles.kontakt}>
               
    <p>Go back to PL</p>
 </div>
)

export default Kontakt;