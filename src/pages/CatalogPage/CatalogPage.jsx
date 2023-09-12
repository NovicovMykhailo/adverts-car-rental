import { useState, useEffect, Suspense } from 'react';
import * as API from '../../services/carsApi.js';
import AdvertCard from 'components/AdvertCard/AdvertCard.jsx';
import css from './CalatogPage.module.css';
import LoadMore from 'components/LoadMore/LoadMore.jsx';
import Modal from 'components/Modal/Modal';
import ModalCard from 'components/Modal/ModalCard/ModalCard.jsx';
import SearchBar from 'components/SearchBar/SearchBar.jsx';


export default function CatalogPage() {
  const [adverts, setAdverts] = useState(null);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [carId, setCarId] = useState(null);
  const [showLoadMore, setShowLoadrMore] = useState(true);
  // first init
  useEffect(() => {
      (async () => {
        try {
          const response = await API.getCars();
          response && setAdverts(response);
        } catch (e) {
          setError(e)
        }
      })();
    
  }, []);

  // pagination
  useEffect(() => {
    if (page !== 1) {
      (async () => {
        try {
          const response = await API.getCars(page);
          response &&
            setAdverts(prev => { return [...prev, ...response]; });
            response && response.length < 8 && setShowLoadrMore(false);
        } catch (e) {}
      })();
    }
  }, [page]);

  const openModal = id => {
    setShowModal(true);
    setCarId(id);
  };

  function handleSearch(e){
    e.preventDefault()
    console.log(e)
  }

  return (
    <>
    <h1 className="visually-hidden">Car Rantal Catalog</h1>
    <SearchBar onSearch={handleSearch}/>
      <ul className={css.cardList}>
        <Suspense fallback={<div>Loading......</div>}>
          {adverts && adverts.map(advert => <AdvertCard advert={advert} key={advert.id} openModal={openModal} />)}
        </Suspense>
      </ul>
      {showLoadMore && adverts?.length > 7 && <LoadMore onClick={() => setPage(prev => prev + 1)} />}

      {showModal && (
        <Modal onClose={() => setShowModal(prev => !prev)} active={showModal}>
          <ModalCard id={carId} />
        </Modal>
      )}
      {error && <div>{error}</div>}
    </>
  );
}
