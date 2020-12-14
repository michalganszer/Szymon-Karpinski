import React from 'react';
import {slides} from '../../../data/madeiraData';
import Slider from '../../../components/Galleries/GalleryClick/GalleryClick';
import {Helmet} from "react-helmet";

const Madeira = () =>(
    <>
    <Helmet>
        <title>Madeira</title>
    </Helmet>
    <Slider slides={slides}/>
    </>
    
);

export default Madeira;