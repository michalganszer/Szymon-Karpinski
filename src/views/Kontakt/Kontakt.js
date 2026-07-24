import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import styles from './Kontakt.module.scss';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Helmet } from 'react-helmet';

const GRAPHCMS_ENDPOINT = 'https://api-eu-central-1.graphcms.com/v2/ckest21fh481r01z5a1lp8trn/master';

const QUERY = `
  {
    kontakts {
      email
      phone
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
        const email = kontaktData?.email || 'karpinski_szymon@wp.pl';
        const phone = kontaktData?.phone || '(+48) 514-942-473';

        return (
          <>
            <Helmet>
              <title>Kontakt</title>
            </Helmet>

            <div className={styles.kontakt}>
              {isPL ? (
                <>
                  <div>{email}</div>
                  <a href={`tel:${phone.replace(/[\s()-]/g, '')}`}>{phone}</a>
                  <p>© {new Date().getFullYear()} Szymon Karpiński</p>
                </>
              ) : (
                <>
                  <div>{email}</div>
                  <a href={`tel:${phone.replace(/[\s()-]/g, '')}`}>{phone}</a>
                  <p>© {new Date().getFullYear()} Szymon Karpiński</p>
                </>
              )}
            </div>
          </>
        );
      }}
    </LanguageContext.Consumer>
  );
};

export default Kontakt;