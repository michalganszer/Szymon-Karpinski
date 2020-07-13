import React from 'react';
import{ Link } from 'react-router-dom';
import styles from './H1.module.scss'

const H1 = () =>(
<h1 className={styles.name}><Link className={styles.nameLink} to="/">Szymon Karpiński</Link>
</h1>
);

export default H1;