import css from './AdvertCard.module.css';
import { getCity,getCountry} from 'utils/formatAdress';
import FavBtn from 'components/FavBtn/FavBtn';

export default function AdvertCard({ advert }) {
  const { img, id, year, model, make, rentalPrice, rentalCompany, type, address, accessories, favs } = advert;

  return (
    <li className={css.card} title={`${accessories.join('\n')}`}>
      <div className={css.imageContainer}>
        <img src={img} alt="CarImage" className={css.image} loading="lazy" />
        <FavBtn className={css.icon} favs={favs || false}/>
      </div>

      <div>
        <h2 className={css.cardTitle}>
          <span>{`${make} `}<span className={css.blued}>{`${model}`}</span>{`, ${year}`}</span>

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
      <button className="button-primary">Learn more</button>
    </li>
  );
}

/**
 * {
    "id": 9582,
    "year": 2008,
    "make": "Buick",
    "model": "Enclave",
    "type": "SUV",
    "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg",
    "description": "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
    "fuelConsumption": "10.5",
    "engineSize": "3.6L V6",
    "accessories": [
        "Leather seats",
        "Panoramic sunroof",
        "Premium audio system"
    ],
    "functionalities": [
        "Power liftgate",
        "Remote start",
        "Blind-spot monitoring"
    ],
    "rentalPrice": "$40",
    "rentalCompany": "Luxury Car Rentals",
    "address": "123 Example Street, Kiev, Ukraine",
    "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
    "mileage": 5858
}
 */
