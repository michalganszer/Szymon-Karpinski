import React from 'react';
import styles from './Kontakt.module.scss';
import { LanguageContext } from '../../contexts/LanguageContext';
import {Helmet} from "react-helmet";

const Kontakt = () =>(

    <LanguageContext.Consumer>{(context)=>{
        return(
            <>
            <Helmet>
                <title>Kontakt</title>
            </Helmet>
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
    <p>©  {(new Date().getFullYear())} Szymon Karpiński </p>
 </div>
)

const EN = () =>(
    <div className={styles.kontakt}>
               
    <p>Go back to PL</p>
 </div>
)

export default Kontakt;