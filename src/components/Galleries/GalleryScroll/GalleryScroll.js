import React from 'react';
import styles from './GalleryScroll.module.scss'
import Slide from '../Slide/Slide';


class GalleryScroll extends React.Component{
    state = {
        slides: this.props.slides,
        showInfo: false
    }

    showInfoHandler = () =>{
        this.setState(prevState => ({
            showInfo: !prevState.showInfo
          }));
    }
render(){
return(
<div className={styles.wrapper}>
<div className={styles.galleryScroll}>
    {this.state.slides.map((slide, i) =>(

        <Slide secondary key={i} image={slide.image} /> 
        
        ))}
        
    </div>

    <button onClick={this.showInfoHandler} className={styles.info}>info</button>
    {this.state.showInfo && <p className={styles.infoContent}>{this.state.slides[0].info}</p>}
</div>
    
 ) }}

export default GalleryScroll