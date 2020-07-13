import React from 'react';
import styles from './Teksty.module.scss'
import TekstyWpis from '../../components/TekstWpis/TekstWpis'

const Teksty = () =>(
    <div className={styles.wrapper}>
    <section className={styles.yearWrapper}>
        <p className={styles.year}>2016:</p>
        <div>
            <TekstyWpis link={""} pdf={"1"}>dupa <i>dupa</i></TekstyWpis>
            <TekstyWpis link={""} pdf={"1"}>dupa <i>dupa</i></TekstyWpis>
        </div>
    </section>

    <section className={styles.yearWrapper}>
        <p className={styles.year}>2019:</p>
        <div>
            <TekstyWpis link={""} pdf={""}>dupa <i>dupa</i></TekstyWpis>
            <TekstyWpis link={"1"} pdf={""}>dupa <i>dupa</i></TekstyWpis>
        </div>
    </section>
    <p className={styles.cc}>Teksty udostępnione na licencji CC, 2020</p>
</div>
);

export default Teksty;