/* eslint-disable */
import React, { useEffect, useState} from 'react';
import { request } from 'graphql-request';
import styles from './App.module.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
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
import Edycje from '../Edycje/Edycje';

const App = () =>{
    const [isModalOpen, setModal] = useState(false);
    const [galleryPages, setProducts] = useState(null);
    const [edycjes, setEdycje] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
          const { galleryPages, edycjes } = await request(
            'https://api-eu-central-1.graphcms.com/v2/ckest21fh481r01z5a1lp8trn/master',
            `
            {
              edycjes{
              edycjeWpiss {
                seoTitle
                seoDescription
                nazwa
                nazwaEn
                opis{
                  raw
              }
            
                opisEn{
                  raw
              }
                zdjecie{url}
              }}
            
          
                galleryPages {
                    name
                    nameEn
                    clickOrScroll
                    seoTitle
                    seoDescription
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
          setEdycje(edycjes);
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
                            <Menu items={galleryPages && galleryPages} edycje={edycjes && edycjes[0].edycjeWpiss}/> 
                        </aside>}
                        {!isPortrait && !isTabletOrMobile && <div className={styles.cover}></div>}
                        

                        <main className={styles.main}>
                            <Route exact path="/" component={Main}></Route>
                            
                            {!galleryPages ? (
                            ''
                            ) : (
                            <div>
                            
                            {galleryPages.map((gallery, i) => (
                                    
                                    <Route path={'/' + (gallery.name.replace(/\s+/g, '-').toLowerCase())} component={() => gallery.clickOrScroll ? <Slider key={Math.random()} seo={gallery} photos={gallery.slides}/> : <GalleryScroll seo={gallery} slides={gallery.slides} />}/>
                                ))}

                            </div>
                                )}  

                              
                              {!edycjes ? (
                              ''
                            ) : (
                              <div>
                             { edycjes[0].edycjeWpiss.map((edycjeWpis, i) => (
                              <Route path={'/sklep/' + (edycjeWpis.nazwa.replace(/\s+/g, '-').replace(/\(|\)/g,'')
                              .replace(/ą/g, 'a').replace(/Ą/g, 'A')
                              .replace(/ć/g, 'c').replace(/Ć/g, 'C')
                              .replace(/ę/g, 'e').replace(/Ę/g, 'E')
                              .replace(/ł/g, 'l').replace(/Ł/g, 'L')
                              .replace(/ń/g, 'n').replace(/Ń/g, 'N')
                              .replace(/ó/g, 'o').replace(/Ó/g, 'O')
                              .replace(/ś/g, 's').replace(/Ś/g, 'S')
                              .replace(/ż/g, 'z').replace(/Ż/g, 'Z')
                              .replace(/ź/g, 'z').replace(/Ź/g, 'Z').toLowerCase())} component={() => <Edycje content={edycjeWpis}/>}/>
                             ))}
                              </div>
                            )}

                            <Route path="/teksty" component={Teksty}/>
                            <Route path="/bio" component={Bio}/>
                            <Route path="/kontakt" component={Kontakt}/>
                                                        
                        </main>

                        
                    </div>
                
                    
                    {isModalOpen && <Modal items={galleryPages && galleryPages} edycje={edycjes && edycjes[0].edycjeWpiss} openClose={openMenu}/>}
                </LanguageContextProvider>
            </BrowserRouter>

        
        )
    
}


export default App;
