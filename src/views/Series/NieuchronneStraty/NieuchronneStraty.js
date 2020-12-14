import React from 'react';
import styles from './NieuchronneStraty.module.scss';
import GalleryScroll from '../../../components/Galleries/GalleryScroll/GalleryScroll';
import {slides} from '../../../data/NieuchronneStraty';
import {Helmet} from "react-helmet";
import photo from '../../../assets/images/Series/NieuchronneZmiany/1.jpg'

const NieuchronneStraty = () =>(
    <>
    <Helmet>
        <title>Nieuchronne straty i wartościowe zmiany</title>
    </Helmet>
    {/*<GalleryScroll slides={slides} />*/}
        <div className={styles.main}>
            <img className={styles.mainImage} src={photo}/>
            <p className={styles.wBudowie}>Projekt w przygotowaniu (2020-2021). Realizowany w ramach Stypendium w dziedzinie kultury i sztuki Miasta Bielska-Białej.</p>
        </div>
        
    
    </>
    
)

export default NieuchronneStraty