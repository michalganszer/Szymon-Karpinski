import React, { useEffect, useState} from 'react';
import { request } from 'graphql-request';
import styles from './App.module.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import Menu from '../../components/Menu/Menu';
import Teksty from '../Teksty/Teksty';
import Bio from '../Bio/Bio';
import Kontakt from '../Kontakt/Kontakt';
import Main from '../Main/Main';
//import Madeira from '../Series/Madeira/Madeira';
import Slider from '../../components/Galleries/GalleryClick/GalleryClick';
import GalleryScroll from './../../components/Galleries/GalleryScroll/GalleryScroll'
//import NieuchronneStraty from '../Series/NieuchronneStraty/NieuchronneStraty';
import Modal from '../../components/Modal/Modal';
import Header from '../../components/Header/Header';
import LanguageContextProvider from '../../contexts/LanguageContext';

const App = () =>{
    const [isModalOpen, setModal] = useState(false);
    const [galleryPages, setProducts] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
          const { galleryPages } = await request(
            'https://api-eu-central-1.graphcms.com/v2/ckest21fh481r01z5a1lp8trn/master',
            `
            {
     
                galleryPages {
                    name
                    clickOrScroll
                    slides {
                      alt
                      descriptionEn {
                        raw
                      }
                      descriptionPl {
                        raw
                      }
                      photo {
                        url
                      }
                    }
                  }
            }
        `
          );
    
          setProducts(galleryPages);
        };
    
        fetchProducts();
      }, []);

      

    const openMenu = () =>{
        setModal(!isModalOpen);
        
        isModalOpen ? document.body.style.overflow = "auto" : document.body.style.overflow = "hidden";
    }
 
 
    const isPortrait = useMediaQuery ({ query: '(orientation: portrait)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 899px)' })


        return(

            <BrowserRouter>
                <LanguageContextProvider> 
                
                    
                    {(isPortrait || isTabletOrMobile) && <Header modalState={isModalOpen}  openClose={openMenu}/>}
                    

                    <div className={styles.wrapper}>
                        
                       
                        {!isPortrait && !isTabletOrMobile && <aside className={styles.aside}>
                            <Header/>
                            <Menu items={galleryPages && galleryPages}/> 
                        </aside>}
                        {!isPortrait && !isTabletOrMobile && <div className={styles.cover}></div>}
                        

                        <main className={styles.main}>
                            <Route exact path="/" component={Main}></Route>
                            
                            {!galleryPages ? (
                            ''
                            ) : (
                            <div>
                            
                            {galleryPages.map((gallery, i) => (
                                    
                                    <Route path={'/' + (gallery.name.replace(/\s+/g, '-').toLowerCase())} component={() => gallery.clickOrScroll ? <Slider key={Math.random()} photos={gallery.slides}/> : <GalleryScroll slides={gallery.slides} />}/>
                                ))}

                            </div>
                                )}                         

                            <Route path="/teksty" component={Teksty}/>
                            <Route path="/bio" component={Bio}/>
                            <Route path="/kontakt" component={Kontakt}/>
                        </main>

                        
                    </div>
                
                    
                    {isModalOpen && <Modal items={galleryPages && galleryPages} openClose={openMenu}/>}
                </LanguageContextProvider>
            </BrowserRouter>

        
        )
    
}


export default App;
