import React, { useEffect, useState, Component } from 'react';
import { request } from 'graphql-request';
import Modal from './Modal/Modal';
import styles from './Projects.module.scss'


const Projects = () =>{
    const [wwws, setProducts] = useState(null);
    const [modal, openModal] = useState(false);
    const [currentIndex, chaneIndex] = useState(0);

    useEffect(() => {
      const fetchProducts = async () => {
        const { wwws } = await request(
          'https://api-eu-central-1.graphcms.com/v2/ckdpl4t968xm101xn55us65mc/master',
          `
          {
            wwws {
              id
              title
              link
              description
              image {
                id
                url
              } 
              
            }
          }
      `
        );
  
        setProducts(wwws);
      };
  
      fetchProducts();
    }, []);
  
    const openMdal = (index) =>{
      chaneIndex(index);
      openModal(true)
    }
    const closeModal = () =>{
      openModal(false)
    }
    return (
      <>
      {!wwws ? (
        'Loading'
      ) : (
      <div className={styles.content}>
        {wwws.map(( www, i ) => (
          <div className={styles.wrapper} onClick={() => openMdal(i)} key={www.id}>
            <img className={styles.img}  src={www.image.url}></img>
            <h3 className={styles.title}>{www.title}</h3>
            <p>{www.description}</p>
            
          </div>
        ))}
      </div>
      )}
      {modal && <Modal openClose={closeModal} data={wwws[currentIndex]} ></Modal>}
      </>
    );
  }

export default Projects