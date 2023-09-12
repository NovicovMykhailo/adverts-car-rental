export default function smartFilter(data, obj) {

  const { make, rentalPrice, millageFrom, millageTo } = obj;

  return data.filter(item => {
    if (millageTo !== ' ' && millageTo && millageFrom !== ' ' && millageFrom && make !== ' ' && make && rentalPrice !== ' ' && rentalPrice) {
     // console.log('1 all 4'); // by all 4 queries
      return  item.mileage < `${millageTo}` && item.mileage > `${millageFrom}` && item.make === make && item.rentalPrice === `$${rentalPrice}`;

    } else if (millageTo !== ' ' && millageTo && millageFrom !== ' ' && millageFrom && rentalPrice !== ' ' && rentalPrice) {
     // console.log('2 price and mileage all'); // by price and mileage from and to
      return  item.mileage <= `${millageTo}` && item.mileage >= `${millageFrom}` && item.rentalPrice === `$${rentalPrice}`;

    } else if (millageTo !== ' ' && millageTo && millageFrom !== ' ' && millageFrom && make !== ' ' && make) {
     // console.log('3 make and milleage all'); // by make and mileage from and to
      return item.make === make && item.mileage >= `${millageFrom}` && item.mileage <= `${millageTo}`;

    } else if (millageTo !== ' ' && millageTo && make !== ' ' && make) {
     // console.log('4 mileage to and make'); // by make and mileage to
      return item.mileage >= `${millageTo}` && item.make === make; 

    } else if (millageFrom !== ' ' && millageFrom && rentalPrice !== ' ' && rentalPrice) {
     // console.log('5 mileage from and price'); // by make and mileage from
      return item.mileage >= `${millageFrom}` && item.make === make; 

    } else if (millageTo !== ' ' && millageTo && rentalPrice !== ' ' && rentalPrice) {
     // console.log('6 mileage to and price'); // by price and mileage to
      return item.mileage >= `${millageTo}` && item.rentalPrice === `$${rentalPrice}`; 

    } else if (millageFrom !== ' ' && millageFrom && make !== ' ' && make) {
     // console.log('7 mileage from and make'); // by price and mileage from
      return item.mileage >= `${millageFrom}` && item.make === make; 

    } else if (make !== ' ' && make && rentalPrice !== ' ' && rentalPrice) {
     // console.log('8 make and price'); // by price and make
      return item.make === make && item.rentalPrice === `$${rentalPrice}`; 

    } else if (millageFrom !== ' ' && millageFrom) {
     // console.log('9 only mileage from'); //mileage from
      return item.mileage >= `${millageFrom}`; 

    } else if (millageTo !== ' ' && millageTo) {
     // console.log('10 only mileage to'); // mileage to
      return item.mileage <= `${millageTo}`; 

    } else if (rentalPrice !== ' ' && rentalPrice) {
     // console.log('11 only price'); //price
      return item.rentalPrice === `$${rentalPrice}`; 

    } else if (make !== ' ' && make) {
     // console.log('12 only make');
      return item.make === make; //make
    }

    return item; //all
  });
}
