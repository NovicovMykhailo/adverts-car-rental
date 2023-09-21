import css from './SearchBar.module.css';
import Select from 'react-select';
import { addDecimalComa } from 'utils/formatAdress';

import carMakes from './makes.json';
import prices from './priceRange.json';
import { carMenuStyles, priceStyles } from './SelectStyles';
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [data, setData] = useState({});
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const updateData = e => {
    if (e.value) {
      setData({
        ...data,
        [e.name]: e.value,
      });
    } else {
      if (e.target.name === 'millageFrom') {
        const updatedValue = addDecimalComa(e.target.value);
        setFrom(updatedValue);
      } else if (e.target.name === 'millageTo') {
        const updatedValue = addDecimalComa(e.target.value);
        setTo(updatedValue);
      }
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <>
   
    <h2 className="visually-hidden">Filter to find cars by price millage mark</h2>
    <form className={css.mainStyle}>
      <div className={css.label} >
        <label htmlFor="make" >
          Car brand
        </label>
        <Select
          inputId="make"
          options={carMakes}
          styles={carMenuStyles}
          onChange={e => updateData({ name: 'make', value: e.value })}
          isSearchable={true}
          closeMenuOnSelect={false}
          placeholder="Enter the text"
        />
      </div>

      <div className={css.label}>
        <label htmlFor="rentalPrice">Price/ 1 hour</label>
        <Select
          inputId="rentalPrice"
          options={prices}
          isSearchable={true}
          onChange={e => updateData({ name: 'rentalPrice', value: e.value })}
          closeMenuOnSelect={false}
          placeholder={'To'}
          styles={priceStyles}
        />
      </div>
      <span className={css.label}>
        <label htmlFor="range">Сar mileage / km </label>
        <span className={css.rangeInputs}>
          <input type="text" name="millageFrom" id="range" onChange={updateData} value={from}  />
          <span className={css.mileageFrom}>From</span>
          <input type="text" name="millageTo"  onChange={updateData} value={to}  />
          <span className={css.mileageTo}>To</span>
        </span>
      </span>

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
    </>
  );
}
