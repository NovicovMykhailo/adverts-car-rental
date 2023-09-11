import { useState, useEffect } from 'react';
import AdvertCard from 'components/AdvertCard/AdvertCard';
import * as API from '../../services/carsApi';
import css from './FavoritesPage.module.css';
import Modal from 'components/Modal/Modal';
import ModalCard from 'components/Modal/ModalCard/ModalCard';
import LoadMore from 'components/LoadMore/LoadMore';

export default function FavoritesPage() {
  const [favCards, setFavCards] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadrMore] = useState(true);
  const [carId, setCarId] = useState(null);
  const [likeChangd, setLikeChanged] = useState(null);

  //initialize
  useEffect(() => {
    (async () => {
      const res = await API.getFavotites();
      res && setFavCards(res);
    })();
  }, []);

  //refresh
  useEffect(() => {
    (async () => {
      const res = await API.getFavotites();
      res && setFavCards(res);
    })();
  }, [likeChangd]);

  // pagination
  useEffect(() => {
    if (page !== 1) {
      (async () => {
        try {
          const response = await API.getFavotites(page);
          response &&
            setFavCards(prev => {
              return [...prev, ...response];
            });
          response && response.length < 8 && setShowLoadrMore(false);
        } catch (e) {}
      })();
    }
  }, [page]);

  const openModal = id => {
    setShowModal(true);
    setCarId(id);
  };

  return (
    <>
      <h1 className={css.favTitle}>Favorites</h1>
      <ul className={css.cardList}>
        {favCards && favCards.map(favCard => <AdvertCard advert={favCard} key={favCard.id} openModal={openModal} isChanged={setLikeChanged} />)}
      </ul>
      {showModal && (
        <Modal onClose={() => setShowModal(prev => !prev)} active={showModal}>
          <ModalCard id={carId} />
        </Modal>
      )}
      {showLoadMore && favCards.length > 7 && <LoadMore onClick={() => setPage(prev => prev + 1)} />}
    </>
  );
}
