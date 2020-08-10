import React, { createContext, Component, Children} from 'react';

export const LanguageContext = createContext();

class LanguageContextProvider extends Component{
    state = { 
        isPL: true
    }
    setPL = () =>{
        this.setState({isPL:true})
    }

    setEN = () =>{
        this.setState({isPL:false})
    }

    render() {
        return(
            <LanguageContext.Provider value={{...this.state, setPL:this.setPL, setEN:this.setEN}}>
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}

export default LanguageContextProvider;