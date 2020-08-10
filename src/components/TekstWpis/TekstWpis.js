import React from 'react';
import styles from './TekstyWpis.module.scss'
import pdfImg from '../../assets/images/icons/pdf.png';
import linkImg from '../../assets/images/icons/link.png';

const TekstWpis = ({children, link, pdf}) =>(
    <div className={styles.tekstWpisWrapper}>
        <p className={styles.children}>{children}
        {pdf!="" && <a href={pdf}><img className={styles.img} alt='pdf icon' src={pdfImg}></img></a>}
        {link!="" && <a href={link}><img className={styles.img} alt='link icon' src={linkImg}></img></a>}
        </p>
    </div>
);

export default TekstWpis;