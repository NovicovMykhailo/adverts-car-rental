import { Link } from 'react-router-dom';
import css from './HomePage.module.css';
import carImage from '../../assets/landRover.png';
import Logo from './Logo';

export default function HomePage() {
  return (
    <main className={css.mainContainer}>
      <Logo/>
      <img src={carImage} className={css.carImage} alt="Car" />
      <h1 className={css.mainTitle}>Luxury Car Rentals</h1>
      <h2 className={css.subTitle}>Find the perfect car for rent today</h2>
      <span className={css.decorLine}></span>
      <p className={css.bottomText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorem ducimus eaque ratione numquam magni debitis nobis excepturi atque ipsa
        saepe commodi cumque fuga nostrum, tenetur consequatur veritatis ipsum ullam quas blanditiis nihil similique enim cupiditate quis! Quos illum
        repudiandae dolorum inventore iure molestiae suscipit itaque quod corrupti, autem molestias.
      </p>
      <Link to={'/catalog'} className="button-primary btn-home">
        Book Now
      </Link>
    </main>
  );
}
