import { useState, useEffect, Suspense } from 'react';
import * as API from '../../services/carsApi.js';
import AdvertCard from 'components/AdvertCard/AdvertCard.jsx';
import css from './CalatogPage.module.css';
import LoadMore from 'components/LoadMore/LoadMore.jsx';
import Modal from 'components/Modal/Modal';
import ModalCard from 'components/Modal/ModalCard/ModalCard.jsx';
import { readFromLS, writeToLS } from 'services/localStoreApi.js';

export default function CatalogPage() {
  const [adverts, setAdverts] = useState(null);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [carId, setCarId] = useState(null);
  // first init
  useEffect(() => {
    if (!readFromLS('cars')) {
      (async () => {
        try {
          const response = await API.getCars();
          response && setAdverts(response);
          response && writeToLS('cars', response);
        } catch (e) {
          setError(e)
        }
      })();
    } else {
      const response = readFromLS('cars');
      response && setAdverts(response);
    }
  }, []);
  // pagination
  useEffect(() => {
    if (page !== 1) {
      (async () => {
        try {
          const response = await API.getCars(page);
          response &&
            setAdverts(prev => {
              return [...prev, ...response];
            });
        } catch (e) {}
      })();
    }
  }, [page]);

  const onLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const openModal = id => {
    setShowModal(true);
    setCarId(id);
  };

  return (
    <>
      <ul className={css.cardList}>
        <Suspense fallback={<div>Loading......</div>}>
          {adverts && adverts.map(advert => <AdvertCard advert={advert} key={advert.id} openModal={openModal} />)}
        </Suspense>
      </ul>
      {page < 4 && <LoadMore onClick={onLoadMore} />}

      {showModal && (
        <Modal onClose={() => setShowModal(prev => !prev)}>
          <ModalCard id={carId} />
        </Modal>
      )}
      {error && <div>{error}</div>}
    </>
  );
}
