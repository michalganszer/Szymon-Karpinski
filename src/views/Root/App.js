import React from 'react';
import styles from './App.module.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import Menu from '../../components/Menu/Menu';
import Teksty from '../Teksty/Teksty';
import Bio from '../Bio/Bio';
import Kontakt from '../Kontakt/Kontakt';
import Main from '../Main/Main';
import Madeira from '../Series/Madeira/Madeira';
import NieuchronneStraty from '../Series/NieuchronneStraty/NieuchronneStraty';
import Modal from '../../components/Modal/Modal';
import Header from '../../components/Header/Header';
import LanguageContextProvider from '../../contexts/LanguageContext';

class App extends React.Component{
    state={
        isModalOpen: false,
    };
    
    openMenu = () =>{
        this.setState(prevState => ({isModalOpen:!prevState.isModalOpen}));
    }

    render(){
        
        return(

            <BrowserRouter>
                <LanguageContextProvider>

                    <MediaQuery maxWidth={899}> 
                    <Header modalState={this.state.isModalOpen} openClose={this.openMenu}/>
                    </MediaQuery>

                    <div className={styles.wrapper}>
                        
                        <MediaQuery minWidth={900}> 
                        <aside className={styles.aside}>
                            <Header/>
                            <Menu/> 
                        </aside>
                        <div className={styles.cover}></div>
                        </MediaQuery>

                        <main className={styles.main}>
                            <Route exact path="/" component={Main}></Route>

                            <Route path="/madeira" component={Madeira}/>
                            <Route path="/Nieuchronne-straty-i-wartościowe-zmiany" component={NieuchronneStraty}/>

                            <Route path="/teksty" component={Teksty}/>
                            <Route path="/bio" component={Bio}/>
                            <Route path="/kontakt" component={Kontakt}/>
                        </main>

                        
                    </div>
                
                    
                    {this.state.isModalOpen && <Modal openClose={this.openMenu}/>}
                </LanguageContextProvider>
            </BrowserRouter>

        
        )
    }
}


export default App;
