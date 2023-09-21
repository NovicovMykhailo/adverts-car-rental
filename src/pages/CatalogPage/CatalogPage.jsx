import { useState, useEffect } from 'react';
import * as API from '../../services/carsApi.js';
import AdvertCard from 'components/AdvertCard/AdvertCard.jsx';
import css from './CalatogPage.module.css';
import LoadMore from 'components/LoadMore/LoadMore.jsx';
import Modal from 'components/Modal/Modal';
import ModalCard from 'components/Modal/ModalCard/ModalCard.jsx';
import SearchBar from 'components/SearchBar/SearchBar.jsx';
import Skeleton from 'components/Skeleton/Skeleton.jsx';
import { readFromLS, writeToLS } from 'services/localStoreApi.js';
import NotFoundComponent from 'components/NotFoundComponent/NotFoundComponent.jsx';
import { useRef } from 'react';

export default function CatalogPage() {
  const [adverts, setAdverts] = useState(null);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [advert, setAdvert] = useState(null);
  const [showLoadMore, setShowLoadrMore] = useState(true);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchData, setSearchData] = useState(null);
  const [shoundUpdateCache, setShoundUpdateCache] = useState(false);
  const [shouldScrollToRow, setShouldScrollToRow] = useState(false);
  const [itemsUpdated, setItemsUpdated] = useState(false);
  const [status, setStatus] = useState('fullfield');

  const gallery = useRef();

  useEffect(() => {
    if (shouldScrollToRow) {
      setTimeout(() => {
        const galleryLength = gallery.current?.childNodes.length;
        const index = galleryLength - 8;
        gallery.current?.childNodes[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 600);
      setShouldScrollToRow(false);
    }
  }, [page, shouldScrollToRow]);

  useEffect(() => {
    if (itemsUpdated) {
      setShouldScrollToRow(true);
      setItemsUpdated(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsUpdated]);

  // first init
  useEffect(() => {
    (async () => {
      setStatus('pending');
      setShoundUpdateCache(false);
      setError(null);
      try {
        if (!readFromLS('cars')) {
          const all = await API.getAll();
          all && writeToLS('cars', all.data);
        }
        const response = await API.getCars();
        response && setAdverts(response);
        response && setTimeout(()=> window.scrollBy({top: 80, behavior: "smooth"}), 300)
        setIsSearchActive(false);
        response && setStatus('fullfield');
      } catch (e) {
        setStatus('rejected');
        setError(e.message);
      }
    })();

  }, []);

  // pagination
  useEffect(() => {
    if (page !== 1 && !isSearchActive) {
      (async () => {
        setShoundUpdateCache(false);
        try {
          const response = await API.getCars(page);
          response &&
            setAdverts(prev => {
              return [...prev, ...response];
            });
          response && setItemsUpdated(true);
          response && response.length < 8 && setShowLoadrMore(false);
        } catch (e) {
          setError(e.message);
        }
      })();
    }
  }, [isSearchActive, page]);

  // Search pagination
  useEffect(() => {
    (async () => {
      if (isSearchActive) {
        const response = await API.search(searchData, page, shoundUpdateCache);
        response && setAdverts(response);
        response && setItemsUpdated(true);
        response && response.length >= 8 && response.length < 30 ? setShowLoadrMore(true) : setShowLoadrMore(false);
      }
    })();
  }, [isSearchActive, page, searchData, shoundUpdateCache]);

  // modal opener
  const openModal = advert => {
    setShowModal(true);
    setAdvert(advert);
  };

  //handle search
  function handleSearch(data) {
    setSearchData(data);
    setPage(1);
    setShowLoadrMore(true);
    setIsSearchActive(true);
  }


  return (
    <>
      <h2 className="visually-hidden">Car Rantal Catalog</h2>
      <SearchBar onSearch={handleSearch} />
      {status === 'fullfield' ? (
        <ul className={css.cardList} ref={gallery}>
          {adverts &&
            adverts.map(advert => (
              <AdvertCard advert={advert} key={advert.id} openModal={openModal} isChanged={() => setShoundUpdateCache(true)} />
            ))}
        </ul>
      ) : (
        <Skeleton />
      )}
      {adverts && adverts.length === 0 && <NotFoundComponent message={'The specified search result is not found'} />}
      {showLoadMore && adverts?.length > 7 && <LoadMore onClick={() => setPage(prev => prev + 1)} />}
      {showModal && (
        <Modal onClose={() => setShowModal(prev => !prev)} active={showModal}>
          <ModalCard advert={advert} closeModal={() => setShowModal(prev => !prev)} />
        </Modal>
      )}
      {status === 'rejected' && error && <div className={css.error}> {error} </div>}
    </>
  );
}
