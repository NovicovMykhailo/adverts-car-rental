import css from './ModalCard.module.css';
import { Link } from 'react-router-dom';


import { getCity, getCountry, arrayFromString, formatMillage } from 'utils/formatAdress';
import closeIcon from '../../../assets/closeIcon.svg'
export default function ModalCard({ advert, closeModal }) {

    const {
      id,
      img,
      make,
      model,
      functionalities,
      mileage,
      year,
      rentalPrice,
      rentalConditions,
      address,
      description,
      fuelConsumption,
      engineSize,
      rentalCompany,
      type,
      accessories,
    } = advert;
   
    return (
      <article className={css.modalBody} tittle={rentalCompany}>
        <img src={closeIcon} alt="Close Button" className={css.closeBtn} onClick={closeModal}/>
        <div className={css.imageContainer}>
          <img src={img} alt="CarImage" className={css.image} loading="lazy" />
        </div>
        <h2 className={css.modalTitle}>
          <span>
            {`${make} `}
            <span className={css.blued}>{`${model}`}</span>
            {`, ${year}`}
          </span>
        </h2>
        <ul className={css.feautersList}>
          <li>{getCity(address)}</li>
          <li>{getCountry(address)}</li>
          <li>Id: {id}</li>
          <li>Year: {year}</li>
          <li>Type: {type}</li>
          <li>Fuel Consumption: {fuelConsumption}</li>
          <li>Engine Size: {engineSize}</li>
        </ul>
        <p className={css.desription}>{description}</p>
        <h3 className={css.subTitle}>Accessories and functionalities: </h3>
        <ul className={css.feautersList}>
          {[...functionalities,...accessories ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
 
        </ul>
        <h3 className={css.subTitle}>Rental Conditions:</h3>
        <ul className={css.rentalDetails}>
          {arrayFromString(rentalConditions).map((item, index) => {
            if (item.includes(':')) {
              return (
                <li key={index}> {item.split(':')[0]}: <span className={css.blued}>{item.split(':')[1]}</span> </li>
              );
            } else {
              return <li key={index}>{item}</li>;
            }
          })}

          <li> Mileage: <span className={css.blued}>{formatMillage(mileage)}</span> </li>
          <li> Price: <span className={css.blued}>{rentalPrice}</span> </li>
        </ul>
        <Link  className="button-primary btn-rent" data-rel="external" to="tel:+380730000000" target="blank">Rental car</Link>
      </article>
    );

}

