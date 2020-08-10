import React from 'react';
import styles from './Slide.module.scss'

const Slide = ({ image }) =>{
   
    return(
    <div className={styles.slideImageWrapper}>
        <img className={styles.slide} src={image}></img>
    </div>
    )}

export default Slide