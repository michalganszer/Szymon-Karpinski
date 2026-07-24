/* eslint-disable */
import React, { useEffect, useState} from 'react';
import styles from './Edycje.module.scss';
import RichText from '../../components/RichText/RichText';
import { LanguageContext } from '../../contexts/LanguageContext';
import {Helmet} from "react-helmet";
const Edycje = ({content}) =>{
   
    return(
        <LanguageContext.Consumer>{(context)=>{
            const {isPL} = context;
            return(
                <>
                <Helmet>
                    <title>{content.seoTitle}</title>
                    <meta name="description" content={content.seoDescription}/>
                </Helmet>
        
    <div className={styles.wrapper}>
        <div className={styles.images}>
            {content.zdjecie.map((img, i) =><img src={img.url}  key={i}/> )}
            
        </div>

        <div className={styles.text}>
            <h1 className={styles.nazwa}>{isPL ? content.nazwa : content.nazwaEn}</h1>
            <div className={styles.opis}>
                <RichText iteraction={isPL ? content.opis : content.opisEn}/>
            </div>
        </div>
   
    </div>
    </>
    )
        }}
    </LanguageContext.Consumer>
)};

export default Edycje