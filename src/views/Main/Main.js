import React from 'react';
import main from '../../assets/images/main.jpg'
import styles from './Main.module.scss';


const Main = () =>(
    <div className={styles.main}>
        <img className={styles.mainImage} src={main}/>
        <p className={styles.by}>by Michał Ganszer</p>
    </div>
);

export default Main;