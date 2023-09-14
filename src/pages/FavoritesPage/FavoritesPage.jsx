import { useState, useEffect } from 'react';
import AdvertCard from 'components/AdvertCard/AdvertCard';
import * as API from '../../services/carsApi';
import css from './FavoritesPage.module.css';
import Modal from 'components/Modal/Modal';
import ModalCard from 'components/Modal/ModalCard/ModalCard';
import LoadMore from 'components/LoadMore/LoadMore';
import Skeleton from 'components/Skeleton/Skeleton.jsx';
import { sortingByPrice } from 'utils/sorting';

export default function FavoritesPage() {
  const [favCards, setFavCards] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadrMore] = useState(true);
  const [carId, setCarId] = useState(null);
  const [likeChangd, setLikeChanged] = useState(true);
  const [status, setStatus] = useState('fullfield');

  //initialize
  useEffect(() => {
    (async () => {
      setStatus('pending');
      const res = await API.getFavotites();
      res && setFavCards(res);
      res && setStatus('fullfield');
    })();
  }, []);

  //refresh
  useEffect(() => {
    (async () => {
      setStatus('pending');
      setTimeout(async () => {
        const res = await API.getFavotites();
        res && setFavCards(res);
        res && setStatus('fullfield');
      }, 300);
    })();
  }, [likeChangd]);

  // pagination
  useEffect(() => {
    if (page !== 1) {
      (async () => {
        const response = await API.getFavotites(page);
        response && setFavCards(prev => [...prev, ...response]);
        response && response.length < 8 ? setShowLoadrMore(false) : setShowLoadrMore(true);
      })();
    }
  }, [page]);

  // modal opener
  const openModal = id => {
    setShowModal(true);
    setCarId(id);
  };

  return (
    <>
      <h1 className={css.favTitle}>Favorites</h1>
      {status === 'fullfield' ? (
        <ul className={css.cardList}>
          {favCards &&
          sortingByPrice(favCards).map(favCard => (
              <AdvertCard advert={favCard} key={favCard.id} openModal={openModal} isChanged={() => setLikeChanged(prev => !prev)} />
            ))}
        </ul>
      ) : (
        <div className={css.margin}>
          <Skeleton />
        </div>
      )}
      {showModal && (
        <Modal onClose={() => setShowModal(prev => !prev)} active={showModal}>
          <ModalCard id={carId} closeModal={() => setShowModal(prev => !prev)} />
        </Modal>
      )}
      {showLoadMore && favCards?.length > 7 && <LoadMore onClick={() => setPage(prev => prev + 1)} />}
    </>
  );
}
