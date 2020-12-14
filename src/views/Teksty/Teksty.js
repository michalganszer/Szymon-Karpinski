import React, { useEffect, useState} from 'react';
import { request } from 'graphql-request';
import styles from './Teksty.module.scss';
import pdfImg from '../../assets/images/icons/pdf.svg';
import linkImg from '../../assets/images/icons/link.svg';
import {Helmet} from "react-helmet";
import { LanguageContext } from '../../contexts/LanguageContext';

const Teksty = () =>{

    const [teksties, setProducts] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
          const { teksties } = await request(
            'https://api-eu-central-1.graphcms.com/v2/ckest21fh481r01z5a1lp8trn/master',
            `
            {
              teksties {
                wpisy {
                  pdf {
                    url
                  }
                  link
                  rok
                  wpis {
                    raw
                  }
                  wpisEn {
                    raw
                  }
                }
              }
            }
        `
          );
    
          setProducts(teksties);
        };
    
        fetchProducts();
      }, []);

      return(
        <LanguageContext.Consumer>{(context)=>{
          const {isPL} = context;
          return(
    <>
    <Helmet>
        <title>Teksty</title>
    </Helmet>


    {!teksties ? (
        ''
        ) : (
        <div className={styles.wrapper}>
          
        {teksties[0].wpisy.map((tekst, i, array) => (
                
                //ODSTĘPY MIĘDZY RÓŻNYMI LATAMI<div className={array[i-1] ? ((array[i-1].rok == tekst.rok) ? styles.containerSecond : styles.container) : styles.container} key={i}>
                <div className={styles.containerSecond}>
                    {/*<p className={styles.year}>{array[i-1] ? ((array[i-1].rok == tekst.rok) ? <p></p> : tekst.rok) : tekst.rok}</p> {/*display certain year only once*/}
                     <p className={styles.year}>{tekst.rok}</p>
                   <div>
                        {/* POTENCJALNY ENTER {tekst.wpis.raw.children.map((a,b) => <p key={b}>{a.children.map((x, j) => (x.italic && x.bold ? <i key={j}><b>{x.text}</b></i> : (x.bold ? <b key={j}>{x.text}</b> : (x.italic ? <i key={j}>{x.text}</i> : x.text))))}</p>)}*/}
                        {isPL ? (tekst.wpis.raw.children[0].children.map((x, j) => (x.italic && x.bold ? <i key={j}><b>{x.text}</b></i> : (x.bold ? <b key={j}>{x.text}</b> : (x.italic ? <i key={j}>{x.text}</i> : x.text))))) : 
                        (tekst.wpisEn && tekst.wpisEn.raw.children[0].children.map((x, j) => (x.italic && x.bold ? <i key={j}><b>{x.text}</b></i> : (x.bold ? <b key={j}>{x.text}</b> : (x.italic ? <i key={j}>{x.text}</i> : x.text)))))}
                        {tekst.link && <a href={tekst.link} target='_blank'><img className={styles.img} alt='link icon' src={linkImg}></img></a>}
                        {tekst.pdf && <a href={tekst.pdf.url} target='_blank' download><img className={styles.img} alt='pdf icon' src={pdfImg}></img></a>}
                    </div>
                </div>
            ))}

        </div>
    )}

   

    <p className={styles.cc}>Teksty zostają udostępnione na licencji CC BY-NC-SA, {(new Date().getFullYear())}</p>
    </>)
        }}
    </LanguageContext.Consumer>
    )};

export default Teksty;