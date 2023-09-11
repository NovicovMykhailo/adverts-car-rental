import css from './ModalCard.module.css';
import { useEffect, useState } from 'react';
import * as API from '../../../services/carsApi';

export default function ModalCard({ id }) {
  const [carInfo, setCarInfo] = useState(null);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
  (async () => {
    setStatus('pending')
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
    const { img } = carInfo;

    return (
      <article className={css.modalBody}>
        <div className={css.imageContainer}>
          <img src={img} alt="CarImage" className={css.image} loading="lazy" />
        </div>
      </article>
    );
  }
}

/**
 * {
    "id": 9987,
    "year": 2020,
    "make": "Volvo",
    "model": "XC60",
    "type": "SUV",
    "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/volvo_xc60.webp",
    "description": "The Volvo XC60 is a compact luxury SUV with a beautiful interior, strong performance, and advanced safety features.",
    "fuelConsumption": "7.9",
    "engineSize": "2.0L 4-cylinder",
    "accessories": [
        "Premium leather seats",
        "Harman Kardon audio system",
        "Hands-free power tailgate"
    ],
    "functionalities": [
        "City Safety collision avoidance technology",
        "Pilot Assist with adaptive cruise control",
        "9-inch Sensus touchscreen infotainment system"
    ],
    "rentalPrice": "$45",
    "rentalCompany": "Luxury Car Rentals",
    "address": "789 Example Boulevard, Odessa, Ukraine",
    "rentalConditions": "Minimum age: 23\nValid driver's license\nCredit card required",
    "mileage": 5966
}
 */
