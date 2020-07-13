import React from 'react';
import styles from './Hamburger.module.scss'



const Hamburger = ({modalState, openClose}) =>(
  
      <button onClick={openClose} className={!modalState ? styles.hamburger : styles.hamburgerActive}>
      <span className={styles.hamburgerBox}>
        <span className={styles.hamburgerInner}></span>
      </span>
    </button>
    );

export default Hamburger;