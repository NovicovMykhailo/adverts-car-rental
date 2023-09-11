import css from './AdvertCard.module.css';
import { getCity, getCountry } from 'utils/formatAdress';
import FavBtn from 'components/FavBtn/FavBtn';

export default function AdvertCard({ advert, openModal }) {
  const { img, id, year, model, make, rentalPrice, rentalCompany, type, address, accessories, favs } = advert;

  return (
    <li className={css.card} title={`${accessories.join('\n')}`}>
      <div className={css.imageContainer}>
        <img src={img} alt="CarImage" className={css.image} loading="lazy" />
        <FavBtn className={css.icon} favs={favs || false} />
      </div>

      <div>
        <h2 className={css.cardTitle}>
          <span>
            {`${make} `}
            <span className={css.blued}>{`${model}`}</span>
            {`, ${year}`}
          </span>

          <span>{rentalPrice}</span>
        </h2>
        <ul className={css.descrList}>
          <li>{getCity(address)}</li>
          <li>{getCountry(address)}</li>
          <li>{rentalCompany}</li>
          <li>Premium</li>
          <li>{type}</li>
          <li>{model}</li>
          <li>{id}</li>
          <li>{accessories[2]}</li>
        </ul>
      </div>
      <button className="button-primary" onClick={() => openModal(id)}>
        Learn more
      </button>
    </li>
  );
}
