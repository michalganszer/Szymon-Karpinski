import React from 'react';
import styles from './Modal.module.scss';
import Menu from'../Menu/Menu';

const Modal = ({openClose, items}) =>(
<div className={styles.wrapper}>
    <Menu openClose={openClose} items={items}/>
</div>
);

export default Modal;