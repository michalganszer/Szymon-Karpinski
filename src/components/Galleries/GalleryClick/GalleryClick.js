import React, {useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import prev from './../../../assets/images/icons/prev.png';
import next from './../../../assets/images/icons/next.png';
import './GalleryClick.scss';
import Info from '../Info/Info';
import {Helmet} from "react-helmet";
import { LanguageContext } from '../../../contexts/LanguageContext';
import RichText from '../../RichText/RichText';






const Slider = ({photos}) => {

  const [index, setIndex] = useState(0);
  //const [slides, setSlides] = useState([photos.description, ...photos.photo])//merge photos and description

 // const slideTo = (i) => this.setState({ currentIndex: i })

  const onSlideChanged = (e) => {
   // document.body.style.overflowY='auto'
   
  return (setIndex(e.item))
  }

  const onSlideChange = (e) => {
    
   // document.body.style.overflowY='hidden'
  }

  const slideNext = () => setIndex(index + 1)

  const slidePrev = () => setIndex(index - 1)

  let xPos = 0;
  let yPos = 0;
  let moveVert = false;
  
  const offOverflow = (e) => {
     if(xPos === 0) xPos = e.targetTouches[0].screenX;
     if (yPos === 0) yPos = e.targetTouches[0].screenY;
   //moveVert === false ? ((Math.abs(xPos - e.targetTouches[0].screenX) > (Math.abs(yPos - e.targetTouches[0].screenY))) ? moveVert=true : moveVert=false) : moveVert=null;
   // console.log('y: ' + Math.abs(yPos - e.targetTouches[0].screenY) + 'x: ' + Math.abs(xPos - e.targetTouches[0].screenX));
    ((Math.abs(xPos - e.targetTouches[0].screenX) > (Math.abs(yPos - e.targetTouches[0].screenY))) ? document.body.style.overflowY='hidden': moveVert=false);
    yPos = e.targetTouches[0].screenY
    xPos = e.targetTouches[0].screenX
    //console.log(moveVert)
    return(
      moveVert
    )

  }
  const onOverflow = () =>{
    document.body.style.overflowY='auto'
  }

    return (
      <LanguageContext.Consumer>{(context)=>{
        const {isPL} = context;
      
        return(
      <>
      
          <Helmet>
          {console.log(context.isPL)}
            <title>{photos.name}</title>
          </Helmet>
        <div onTouchMove={offOverflow} onTouchEnd={onOverflow} className="alice-carousel-custom-wrapper">

         {isPL && <AliceCarousel
            dotsDisabled={true}
            buttonsDisabled={true}
            slideToIndex={index}
            onSlideChange = {onSlideChange}
            onSlideChanged={onSlideChanged}          
            
            
          >
            
            {photos.map((slide, i) =>(
            (slide.photo && isPL) ? (<img key={i} src={slide.photo.url} alt={slide.alt} className="alice-carousel__slide" />
            ) : (
              
            <div className="alice-carousel__text"><RichText iteraction = {slide.descriptionPl}/></div>)
            
            ))}
            
          </AliceCarousel>}
         
        {!isPL && <AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={true}
          slideToIndex={index}
          onSlideChanged={onSlideChanged}
         
        >
          {photos.map((slide, i) =>(
          (slide.photo && !isPL) ? (<img key={i} src={slide.photo.url} alt={slide.alt} className="alice-carousel__slide" />
          ) : (
          <p className="alice-carousel__text"><RichText iteraction = {slide.descriptionEn}/></p>)
        
          ))}
          
        </AliceCarousel>}
          
          

          <button className="alice-carousel__prev-btn-custom" onClick={() => slidePrev()}><img alt='' src={prev}/></button>
          <button className="alice-carousel__next-btn-custom" onClick={() => slideNext()}><img alt='' src={next}/></button>
              
        </div>
      </>
        )
      }}
    </LanguageContext.Consumer>
    
    )
}

export default Slider

