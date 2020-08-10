import React from 'react';
import styles from './Info.module.scss';

const Info = ({ info, animate }) =>{
   let infoClass = info;

   if (animate === 1){
       infoClass = styles.infoContentFadeIn;
    }
    else if (animate === 2){
        infoClass = styles.info
    }
    else{
        infoClass = styles.infoContentFadeOut
    }
return(
  <p className={infoClass}>{info}</p>
)
    
}
 


//class Info extends React.Component {
 

//    state = {
//      info: this.props.info,
//      animate:this.props.animate
//    }


//    render() {
//        return(
//        <p className={this.state.animate ? styles.infoContentFadeIn : styles.infoContentFadeOut}>{this.state.info}</p>
//        )
//    }
//}




export default Info;