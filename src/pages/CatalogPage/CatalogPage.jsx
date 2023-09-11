import { useState, useEffect } from 'react';
import * as API from '../../services/carsApi.js';
import AdvertCard from 'components/AdvertCard/AdvertCard.jsx';
import css from './CalatogPage.module.css'

export default function CatalogPage() {
  const [adverts, setAdverts] = useState(null);
  // const [error, setError] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const response = await API.getCars();
        response && setAdverts(response);
      } catch (e) {

      }
    })();
  }, []);

  return (
    <>
      <ul className={css.cardList}>
        {adverts &&
          adverts.map(advert => <AdvertCard advert={advert} key={advert.id} />)}
      </ul>
    </>
  );
}
