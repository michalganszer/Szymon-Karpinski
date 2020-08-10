
import React from 'react';
import styles from './Bio.module.scss';
import PDF from '../../assets/images/icons/pdf.png'
import { LanguageContext } from '../../contexts/LanguageContext';

const Bio = () =>(
    <LanguageContext.Consumer>{(context)=>{
        const {isPL} = context;
        return(
        
        <div className={styles.wrapper}>
        
        <div className={styles.download}>
        {isPL ? 'Pobierz Bio' : 'Download Bio'} <img src={PDF}/>
        </div>
        
        <section className={styles.sectionWrapper}>
        <h3>{isPL ? 'Edukacja' : 'Education'}</h3>
            <div className={styles.container}>
                <p className={styles.year}>2019:</p>
                <p className={styles.text}>Magisterium, kulturoznawstwo, Uniwersytet Śląski, Katowice</p>
            </div>
        </section>
    
        <section className={styles.sectionWrapper}>
        <h3>{isPL ? 'Staże' : 'Internships'}</h3>
            <div className={styles.container}>
                <p className={styles.year}>2017:</p>
                <p className={styles.text}>A, B, C – Architektura Bliżej Ciebie. Cyfrowe archiwum fotografii Zygmunta Kubskiego ze zbiorów Muzeum Miejskiego w Tychach, Dział Fotografii, Tychy</p>
            </div>
        </section>
    
        <section className={styles.sectionWrapper}>
            <h3>Wystawy</h3>
            <div className={styles.container}>
                <p className={styles.year}>2014:</p>
                <p className={styles.text}>Portugalska miłość, SKATE OR DIE, Kraków</p>
            </div>
            <div className={styles.container}>
                <p className={styles.year}>2015:</p>
                <p className={styles.text}>Foto open, 6. FotoArtFestival, Bielsko-Biał</p>
            </div>
            <div className={styles.container}>
                <p className={styles.year}>ongoing:</p>
                <p className={styles.text}>Nieuchronne straty i wartościowe zmiany, Bielsko-Biała</p>
            </div>
        </section>
    
        <section className={styles.sectionWrapper}>
            <h3>Publikacje</h3>
            <div className={styles.container}>
                <p className={styles.year}>2019:</p>
                <p className={styles.text}>Madeira, zine, Bielsko-Biała</p>
            </div>
            <div className={styles.container}>
                <p className={styles.year}>ongoing:</p>
                <p className={styles.text}>Nieuchronne straty i wartościowe zmiany, photobook, Bielsko-Biała</p>
            </div>
        </section>
    
        <section className={styles.sectionWrapper}>
            <h3>Wystawy kuratorskie</h3>
            <div className={styles.container}>
                <p className={styles.year}>2017:</p>
                <p className={styles.text}>Dom w Tbilisi, Uta Beyer, Klub Absurdalna, Katowice</p>
            </div>
            <div className={styles.container}>
                <p className={styles.year}>2018:</p>
                <p className={styles.text}>Wystawa zdjęć Murckowiaków, Fundacja Kultura Obrazu, KatowiceMniej więcej. Fotografie z archiwum Marka Piaseckiego, Fundacja Archeologia  Fotografii, Towarzystwo Inicjatyw Twórczych “ę”, Warszawa</p>
            </div>
        </section>
    
        <section className={styles.sectionWrapper}>
            <h3>Wykłady i warsztaty</h3>
            <div className={styles.container}>
                <p className={styles.year}>2016:</p>
                <p className={styles.text}>Domowe archiwa – wokół rodzinnego albumu, Galeria Bielska BWA, Bielsko-Biała</p>
            </div>
        </section>
    
        <section className={styles.sectionWrapper}>
            <h3>Projekty badawcze</h3>
            <div className={styles.container}>
                <p className={styles.year}>2015:</p>
                <p className={styles.text}>Pamięć przeszłości – przyszłość pamięci, Berlin</p>
            </div>
            <div className={styles.container}>
                <p className={styles.year}>2016:</p>
                <p className={styles.text}>Pamięć przeszłości – przyszłość pamięci, Berlin</p>
            </div>
            <div className={styles.container}>
                <p className={styles.year}>2019:</p>
                <p className={styles.text}>Domowe ogrodnictwo jako zespół praktyk kulturowych, woj. śląskie</p>
            </div>
        </section>
    
        <section className={styles.sectionWrapper}>
            <h3>Projekty graficzne</h3>
            <div className={styles.container}>
                <p className={styles.year}>2016/<span className={styles.enter}><br/></span>2017:</p>
                <p className={styles.text}>Przegląd Filmów Etnograficznych “Oczy i Obiektywy”, Katowice Laboratorium Obrazu, Katowice</p>
            </div>
            <div className={styles.container}>
                <p className={styles.year}>2017:</p>
                <p className={styles.text}>Dom w Tbilisi, Uta Beyer, Katowice </p>
            </div>
            <div className={styles.container}>
                <p className={styles.year}>2019:</p>
                <p className={styles.text}>Raje i ruiny. Turystyka na końcach światów, Katowice</p>
            </div>
        </section>
    
        <section className={styles.sectionWrapper}>
            <h3>Certyfikaty</h3>
            <div className={styles.container}>
                <p className={styles.year}>2020:</p>
                <p className={styles.text}>Archiwista społeczny, Fundacja Ośrodka KARTA, Warszawa Digitalizera materiałów archiwalnych, Fundacja Ośrodka KARTA, Warszawa</p>
            </div>
        </section>
    
        
    
    </div>       
        )
    }}
 
    
</LanguageContext.Consumer>
);

export default Bio;