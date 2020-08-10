import React from 'react';
import styles from './Teksty.module.scss'
import TekstyWpis from '../../components/TekstWpis/TekstWpis'

const Teksty = () =>(
    <div className={styles.wrapper}>
    <section className={styles.container}>
        <p className={styles.year}>2016:</p>
        <div className={styles.wpisWrapper}>
            <TekstyWpis link={""} pdf={"1"}><i>W kosmos aparatu,</i> Magazyn OBIEKTYW #1, Katowice </TekstyWpis>
            <TekstyWpis link={""} pdf={"1"}><i>Rozważania po czasie – 14. Edycja Miesiąca Fotografii w Krakowie,</i>Pracownia Kultury, Katowice</TekstyWpis>
        </div>
    </section>

    <section className={styles.container}>
        <p className={styles.year}>2018:</p>
        <div className={styles.wpisWrapper}>
            <TekstyWpis link={"1"} pdf={""}>Recenzja wystawy. “Joanna Helander. Archiwum Otwarte” , Reflektor. Rozświetlamy kulturę!, Katowice</TekstyWpis>
        </div>
    </section>

    <section className={styles.container}>
        <p className={styles.year}>2019:</p>
        <div className={styles.wpisWrapper}>
            <TekstyWpis link={""} pdf={""}>Wydobywane z węgla. Wizualne reprezentacje prac górniczych, Katowice</TekstyWpis>
            <TekstyWpis link={""} pdf={""}><i>Zielniki i banki nasion jako archiwa roślinności,</i> Katowice</TekstyWpis>
        </div>
    </section>




<section className={styles.container}>
    <span></span>
    <p className={styles.cc}>Teksty udostępnione na licencji CC, 2020</p>
</section>
    
</div>
);

export default Teksty;