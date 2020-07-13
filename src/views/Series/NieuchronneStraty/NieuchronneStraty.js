import React from 'react';
import styles from './NieuchronneStraty.scss';
import GalleryScroll from '../../../components/Galleries/GalleryScroll/GalleryScroll';
import {slides} from '../../../data/NieuchronneStraty'

const NieuchronneStraty = () =>(
    
    <GalleryScroll slides={slides} />
    
)

export default NieuchronneStraty