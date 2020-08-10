import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import prev from './../../../assets/images/icons/prev.png';
import next from './../../../assets/images/icons/next.png';
import './GalleryClick.scss';
import Info from '../Info/Info'



class Slider extends React.Component {
  state = {
    slides: this.props.slides,
    showInfo:false,
    showInfoAnimate:3,
    currentIndex: 0,
  }

  slideTo = (i) => this.setState({ currentIndex: i })

  onSlideChanged = (e) => this.setState({ currentIndex: e.item })

  slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })

  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })

  thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}>* </span>

  
  
  animateInfo = () =>{
    //this.setState(prevState => ({
    //  showInfoAnimate: !prevState.showInfoAnimate}))
    if (this.state.showInfoAnimate === 3){
      this.setState({
        showInfoAnimate: 1
      })
      setTimeout(()=>{this.setState({
        showInfoAnimate: 2
      })},700)
    }
    else {
      this.setState({
        showInfoAnimate: 3
      })
    }
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


  render() {
    const {currentIndex } = this.state
    return (
      <div>
      <div className="alice-carousel-custom-wrapper">
        <AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={true}
          slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
        >

        {this.state.slides.map((slide, i) =>(

        <img key={i} src={slide.image} className="alice-carousel__slide" />  

        ))}
        </AliceCarousel>


        <button className="alice-carousel__prev-btn-custom" onClick={() => this.slidePrev()}><img src={prev}/></button>
        <button className="alice-carousel__next-btn-custom" onClick={() => this.slideNext()}><img src={next}/></button>
      

        
      </div>
      <div className="alice-carousel__buttonWrapper">
            <button onClick={this.showInfoHandler} className="alice-carousel__info">INFO</button>
        </div>

        {this.state.slides.map((slide, i) =>(
          this.state.showInfo && (i === this.state.currentIndex) && <Info key={i}  animate={this.state.showInfoAnimate} info={slide.info}/>))}
      </div>
    )
  }
}

export default Slider

