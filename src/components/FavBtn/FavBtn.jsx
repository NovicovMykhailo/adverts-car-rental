import hollow from '../../assets/HeartHollow.svg';
import filled from '../../assets/HeartFull.svg';
import { useState } from 'react';
import * as API from '../../services/carsApi';

export default function FavBtn({ id, className, favs, isChanged }) {
  const [liked, setLiked] = useState(favs);
  const [status, setStatus] = useState('resolved');

  async function onLikeButtonPress() {
    setStatus('pending');
    isChanged && isChanged(prev => !prev);
    if (!liked) {
      const response = await API.adToFavs(id, true);
      response && setLiked(true);
      setStatus('resolved');
    } else {
      const response = await API.adToFavs(id, false);
      response && setLiked(false);
      setStatus('resolved');
    }
  }

  return (
    <div className={className} onClick={onLikeButtonPress} disabled={status === 'pending'}>
      {liked ? <img src={filled} alt="in favorites" /> : <img src={hollow} alt="not in favorites" />}
    </div>
  );
}
