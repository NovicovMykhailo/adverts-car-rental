import css from './AdvertCard.module.css';
import { getCity, getCountry } from 'utils/formatAdress';
import FavBtn from 'components/FavBtn/FavBtn';
import Image from './Image';


export default function AdvertCard({ advert, openModal, isChanged }) {
  const { img, id, year, model, make, rentalPrice, rentalCompany, type, address, accessories, favs } = advert;



  return (
    <li className={css.card} title={`${accessories.join('\n')}`} data-aos="zoom-in" >
      <div className={css.imageContainer}>
        <Image src={img}/>       
        <FavBtn className={css.icon} favs={favs ? favs : false} id={id} isChanged={isChanged} />
      </div>

      <div>
        <h3 className={css.cardTitle}>
          <span>
            {`${make} `}
            <span className={css.blued}>{`${model}`}</span>
            {`, ${year}`}
          </span>

          <span>{rentalPrice}</span>
        </h3>
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
      <button className="button-primary" onClick={() => openModal(advert)}>
        Learn more
      </button>
    </li>
  );
}
