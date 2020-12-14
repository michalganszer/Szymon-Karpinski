
import React, { useEffect, useState} from 'react';
import { request } from 'graphql-request';
import styles from './Bio.module.scss';
import PDF from '../../assets/images/icons/pdf.svg'
import { LanguageContext } from '../../contexts/LanguageContext';
import {Helmet} from "react-helmet";
import RichText from '../../components/RichText/RichText';

const Bio = () =>{

    const [bios, setProducts] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
          const { bios } = await request(
            'https://api-eu-central-1.graphcms.com/v2/ckest21fh481r01z5a1lp8trn/master',
            `
            {
                bios {
                    wpisy {
                        dzial
                        dzialEn
                        rok
                        wpis {
                            raw
                        }
                        wpisEn {
                            raw
                        }
                    }
                    bioDownload {
                        url
                    }
                }
            }
        `
          );
    
          setProducts(bios);
        };
    
        fetchProducts();
      }, []);

      return(
    <LanguageContext.Consumer>{(context)=>{
        const {isPL} = context;
        return(
        <>
            <Helmet>
                <title>Szymon Karpiński - Bio</title>
            </Helmet>
        
            
           
            {!bios ? (
                ''
                ) : (
                <>
                <div className={styles.download}>
                    {isPL ? 'Pobierz bio' : 'Download bio'} <a target='_blank' href={bios[0].bioDownload.url}><img src={PDF}/></a>
                </div> 

                <div className={styles.wrapper}>
                    {bios[0].wpisy.map((wpis, i, array) => 
                    <>
                    <p className={array[i-1] ? ((array[i-1].dzial === wpis.dzial) ? styles.dzialSecond : styles.dzial) : styles.dzial}>{array[i-1] ? ((array[i-1].dzial === wpis.dzial) ? <p></p> : (isPL ? wpis.dzial : wpis.dzialEn)) : (isPL ? wpis.dzial : wpis.dzialEn)}</p> {/*display certain title only once*/}  
                        <div className={styles.container} key={i}>
                            <p className={styles.year}>{wpis.rok}</p>{/*{array[i-1] ? (((array[i-1].rok === wpis.rok) && (array[i-1].dzial === wpis.dzial)) ? <p></p> : wpis.rok) : wpis.rok}</p> display certain year only once*/}
                            
                             <p>{isPL ? <RichText iteraction={wpis.wpis}/> : <RichText iteraction={wpis.wpisEn}/>}</p>
                        </div>
                    </>
                    )}
                </div> 
                </>

            )}

           
        </>    
        )
    }}
 
    
</LanguageContext.Consumer>
)};

export default Bio;