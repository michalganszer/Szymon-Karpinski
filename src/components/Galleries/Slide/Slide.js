import React from 'react';
import styles from './Slide.module.scss'

const Slide = ({ image, secondary }) =>{
    const buttonClass = secondary ? styles.secondary : styles.slide;
    
    return(
    <div className={styles.slideImageWrapper}>
        <img className={buttonClass} src={image}></img>
    </div>
    )}

export default Slide