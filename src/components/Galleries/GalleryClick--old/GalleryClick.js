import React from 'react';
import styles from './GalleryClick.module.scss';
import prev from './../../../assets/images/icons/prev.png';
import next from './../../../assets/images/icons/next.png';
import Slide from '../Slide/Slide';
import Info from '../Info/Info'



class GalleryClick extends React.Component{
    state = {
        currentIndex: 0,
        slides: this.props.slides,
        info:this.props.info,
        showInfo: false,
        showInfoX: false
    }
    
    goToPrevSlide = () => {
        if(this.state.currentIndex != 0)        
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex - 1
        }))
      }

    goToNextSlide = () => {
        if(this.state.currentIndex != (this.state.slides.length - 1))
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1
          }))
    }

    showInfoHandler = () =>{
        
        this.setState(prevState => ({
            showInfoX: !prevState.showInfoX}))

        this.state.showInfo === true ?
        
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
                    <div className={styles.slideWrapper}>
                        {this.state.slides.map((slide, i) =>(

                        (i === this.state.currentIndex) 
                        && 
                        <Slide key={i} image={slide.image} />  

                        ))}
                         
                            {(this.state.currentIndex != (this.state.slides.length - 1)) && <Next goToNextSlide={this.goToNextSlide}/>}
                            {(this.state.currentIndex != 0) && <Prev goToPrevSlide={this.goToPrevSlide}/>}
                        <div className={styles.buttonWrapper}>
                            <button onClick={this.showInfoHandler} className={styles.info}>INFO</button>
                        </div>
                    </div>                  
                    
                    {this.state.slides.map((slide, i) =>(
                    this.state.showInfo && (i === this.state.currentIndex) && <Info key={i}  showInfo={this.state.showInfoX} info={slide.info}/>))}
                    
                </div>

            )
        }
    };




const Prev = ({goToPrevSlide}) =>{
    return <div className={styles.buttonPrev} onClick={goToPrevSlide} ><img src={prev}/></div>
    }

const Next = ({goToNextSlide}) =>{
      return <div className={styles.buttonNext} onClick={goToNextSlide} ><img src={next}/></div>
    }


export default GalleryClick;