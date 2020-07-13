import React from 'react';
import styles from './Modal.module.scss';
import Menu from'../Menu/Menu';

const Modal = ({openClose}) =>(
<div className={styles.wrapper}>
    <Menu openClose={openClose}/>
</div>
);

export default Modal;