import React from 'react';
import styles from './GalleryScroll.module.scss'
import Slide from '../Slide/Slide';


class GalleryScroll extends React.Component{
    state = {
        slides: this.props.slides,
        showInfo: false,
        showInfoAnimate:false
    }

    animateInfo = () =>{
        this.setState(prevState => ({
          showInfoAnimate: !prevState.showInfoAnimate}))
        
      }
    
      showInfoHandler = () =>{
            
        this.animateInfo()
        
    
        this.state.showInfo  ?
        
        (setTimeout(() =>{
        this.setState(prevState => ({
            showInfo: !prevState.showInfo
          }))}, 700)
          
    
          ) : (
    
            this.setState(prevState => ({
            showInfo: !prevState.showInfo})));
            setTimeout(() =>{
            window.scrollTo({top:document.body.scrollHeight,behavior: 'smooth' });}, 100)        
        }

render(){
return(
<div className={styles.wrapper}>
    <div className={styles.galleryScroll}>
        {this.state.slides.map((slide, i) =>(

            <Slide key={i} image={slide.image} /> 
            
            ))}
        
    </div>
    
    <button onClick={this.showInfoHandler} className={styles.info}>INFO</button>
    {this.state.showInfo && <p className={this.state.showInfoAnimate ? styles.infoContentFadeIn : styles.infoContentFadeOut}>{this.state.slides[0].info}</p>}
</div>
    
 ) }}

export default GalleryScroll