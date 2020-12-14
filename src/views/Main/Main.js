import React, { useEffect, useState} from 'react';
import { request } from 'graphql-request';
import styles from './Main.module.scss';
import {Helmet} from "react-helmet";





const Main = () =>{
    const [stronaGlownas, setProducts] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
          const { stronaGlownas } = await request(
            'https://api-eu-central-1.graphcms.com/v2/ckest21fh481r01z5a1lp8trn/master',
            `
            {
                stronaGlownas {
                  zdjecieGlowne {
                    url
                  }
                }
              }
              
        `
          );
    
          setProducts(stronaGlownas);
        };
    
        fetchProducts();
      }, []);
      return(
    <>
    <Helmet>
        <title>Szymon Karpiński</title>
    </Helmet>
    <div className={styles.main}>
        {!stronaGlownas ? <div className={styles.ripple}></div> :
        <img alt='main image representing a rock' className={styles.mainImage} src={stronaGlownas[0].zdjecieGlowne.url}/>
        }
    </div>

<p className={styles.by}>by Michał Ganszer</p>

</>
)};

export default Main;