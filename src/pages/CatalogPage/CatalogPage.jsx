import { useState, useEffect } from 'react';
import * as API from '../../services/carsApi.js';
import AdvertCard from 'components/AdvertCard/AdvertCard.jsx';
import css from './CalatogPage.module.css';
import LoadMore from 'components/LoadMore/LoadMore.jsx';

export default function CatalogPage() {
  const [adverts, setAdverts] = useState(null);
  const [page, setPage] = useState(1);
  // const [error, setError] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const response = await API.getCars();
        response && setAdverts(response);
      } catch (e) {}
    })();
  }, []);


  useEffect(() => {
    if(page !== 1){
      (async () => {
        try {
          const response = await API.getCars(page);
          response && setAdverts(prev => {return [...prev, ...response]});

        } catch (e) {}
      })();

    }
 
  }, [page]);

  const onLoadMore = () => {
    setPage(prev => prev + 1);
  };
  return (
    <>
      <ul className={css.cardList}>{adverts && adverts.map(advert => <AdvertCard advert={advert} key={advert.id} />)}</ul>
      {page < 4 && <LoadMore onClick={onLoadMore} />}
    </>
  );
}
