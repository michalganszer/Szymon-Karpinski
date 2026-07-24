import React from 'react';
import styles from './GalleryScroll.module.scss'
import Slide from '../Slide/Slide';
import {Helmet} from "react-helmet";


const GalleryScroll = ({slides, seo}) =>{
        
return(
<div className={styles.wrapper}>
    <Helmet>
        <title>{seo.seoTitle}</title>
        <meta name="description" content={seo.seoDescription}/>
    </Helmet>

    <div className={styles.galleryScroll}>
        {slides.map((slide, i) =>(
            slide.photo ? (<Slide key={i} image={slide.photo.url} />
               
                ) : (
                <p className={styles.description}>{slide.descriptionPl.raw.children[0].children.map((x, j) => (x.italic && x.bold ? <i key={j}><b>{x.text}</b></i> : (x.bold ? <b key={j}>{x.text}</b> : (x.italic ? <i key={j}>{x.text}</i> : x.text.replace(/ ([a-zA-Z]) /g, ' $1\u00A0')))))}</p>
                )
            
            
            ))}
        
    </div>
</div>
    
 ) }

export default GalleryScroll