import React from 'react';
import styles from './Madeira.module.scss';
import GalleryClick from '../../../components/Galleries/GalleryClick/GalleryClick';
import {slides} from '../../../data/madeiraData'

const Madeira = () =>(
    <div>
    <GalleryClick slides={slides}/>
    </div>

);

export default Madeira;