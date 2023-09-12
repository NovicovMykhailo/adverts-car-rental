import css from './SearchBar.module.css';
import Select from 'react-select';
import carMakes from './makes.json';
import prices from './priceRange.json';
import { carMenuStyles, priceStyles } from './SelectStyles';

export default function SearchBar() {
  return (
    <form className={css.mainStyle}>
      <label className={css.label}>
        Car brand
        <Select options={carMakes} name="make" styles={carMenuStyles} isSearchable={true} closeMenuOnSelect={false} placeholder="Enter the text" />
      </label>
      <label className={css.label}>
        Price/ 1 hour
        <Select options={prices} name="price" isSearchable={true} closeMenuOnSelect={false} placeholder={'To'} styles={priceStyles} />
      </label>
      <label className={css.label}>
        Сar mileage / km
        <div className={css.rangeInputs}>
          <input type="text" name="millage-from" placeholder='From'/>
          <input type="text" name="millage-to" placeholder='To'/>
        </div>
      </label>
      <button type="submit" className="button-primary btn-search">
        Search
      </button>
    </form>
  );
}
