import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import styles from './Kontakt.module.scss';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Helmet } from 'react-helmet';
import RichText from '../../components/RichText/RichText';

const GRAPHCMS_ENDPOINT = 'https://api-eu-central-1.graphcms.com/v2/ckest21fh481r01z5a1lp8trn/master';

const QUERY = `
  {
    kontakts {
      contact {
        raw
      }
    }
  }
`;

const Kontakt = () => {
  const [kontaktData, setKontaktData] = useState(null);

  useEffect(() => {
    const fetchKontakt = async () => {
      try {
        const { kontakts } = await request(GRAPHCMS_ENDPOINT, QUERY);
        if (kontakts && kontakts.length > 0) {
          setKontaktData(kontakts[0]);
        }
      } catch (error) {
        console.error('Błąd podczas pobierania danych z GraphCMS:', error);
      }
    };

    fetchKontakt();
  }, []);

  return (
    <LanguageContext.Consumer>
      {(context) => {
        const { isPL } = context;
        const activeContent = kontaktData?.contact;

        return (
          <>
            <Helmet>
              <title>{isPL ? 'Kontakt - fotografia, Szymon Karpiński, Bielsko-Biała' : 'Contakt - Szymon Karpiński'}</title>
              <meta name="description" content='Zapraszam do kontaktu'/>
            </Helmet>

            <div className={styles.kontakt}>
              {activeContent ? (
                <RichText iteraction={activeContent} />
              ) : (
                <>
                  <div>{isPL ? 'Bielsko-Biała, Polska' : 'Bielsko-Biała, Poland'}</div>
                  <div>karpinski_szymon(at)wp.pl</div>
                  <a href="tel:+48514942473">(+48) 514-942-473</a>
                </>
              )}
              <p>© {new Date().getFullYear()} Szymon Karpiński</p>
            </div>
          </>
        );
      }}
    </LanguageContext.Consumer>
  );
};

export default Kontakt;