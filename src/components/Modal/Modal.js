import React from 'react';
import styles from './Modal.module.scss';
import Menu from'../Menu/Menu';

const Modal = ({openClose, items, edycje}) =>(
<div className={styles.wrapper}>
    <Menu openClose={openClose} items={items} edycje={edycje}/>
</div>
);

export default Modal;