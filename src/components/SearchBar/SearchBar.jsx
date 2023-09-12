import css from './SearchBar.module.css';
import Select from 'react-select';
import carMakes from './makes.json';
import prices from './priceRange.json';
import { carMenuStyles, priceStyles } from './SelectStyles';
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [data, setData] = useState({});

  const updateData = e => {
    if (e.value) {
      setData({
        ...data,
        [e.name]: e.value,
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <form className={css.mainStyle}>
      <label className={css.label}>
        Car brand
        <Select
          options={carMakes}
          styles={carMenuStyles}
          onChange={e => updateData({ name: 'make', value: e.value })}
          isSearchable={true}
          closeMenuOnSelect={false}
          placeholder="Enter the text"
        />
      </label>
      <label className={css.label}>
        Price/ 1 hour
        <Select
          options={prices}
          isSearchable={true}
          onChange={e => updateData({ name: 'rentalPrice', value: e.value })}
          closeMenuOnSelect={false}
          placeholder={'To'}
          styles={priceStyles}
        />
      </label>
      <label className={css.label}>
        Сar mileage / km
        <div className={css.rangeInputs}>
          <input type="text" name="millageFrom" placeholder="From" onChange={updateData} />
          <input type="text" name="millageTo" placeholder="To" onChange={updateData} />
        </div>
      </label>
      <button
        type="submit"
        className="button-primary btn-search"
        onClick={e => {
          e.preventDefault();
          onSearch(data);
        }}
      >
        Search
      </button>
    </form>
  );
}
