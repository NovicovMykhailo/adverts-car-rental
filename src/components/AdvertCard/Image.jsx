import { useState } from 'react';
import css from './AdvertCard.module.css';

export default function Image({ src }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={css.imageContainer}>
      {loaded ? null : <div className={css.isLoading}></div>}
      <img src={src} alt="CarImage" className={`${loaded ? css.image : css.hide}`} onLoad={() => setTimeout(()=>setLoaded(true), 300)} />
    </div>
  );
}
