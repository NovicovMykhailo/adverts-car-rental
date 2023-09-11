import css from './ModalCard.module.css';
import { useEffect, useState } from 'react';
import * as API from '../../../services/carsApi';
import { getCity, getCountry, arrayFromString, formatMillage } from 'utils/formatAdress';

export default function ModalCard({ id }) {
  const [carInfo, setCarInfo] = useState(null);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    (async () => {
      setStatus('pending');
      try {
        const res = await API.getCarById(id);
        res && setCarInfo(...res);
        res && setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
      }
    })();
  }, [id]);

  if (status === 'resolved') {
    const {
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
    } = carInfo;
   
    return (
      <article className={css.modalBody} tittle={rentalCompany}>
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
        <button type="button" className="button-primary btn-rent">Rental car</button>
      </article>
    );
  }
}

