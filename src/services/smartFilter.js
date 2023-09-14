export default function smartFilter(data, obj) {

  const { make, rentalPrice, millageFrom, millageTo } = obj;

  return data.filter(item => {
    if (make !== ' ' && make && rentalPrice !== ' ' && rentalPrice && millageTo !== ' ' && millageTo && millageFrom !== ' ' && millageFrom ) {
      //console.log('1 > all 4'); // by all 4 queries
      return item.mileage >= `${millageFrom}` &&  item.mileage <= `${millageTo}` && item.rentalPrice === `$${rentalPrice}` &&  item.make === make;

    } else if (rentalPrice !== ' ' && rentalPrice && millageTo !== ' ' && millageTo && millageFrom !== ' ' && millageFrom ) {
      //console.log('2 > price and mileage all'); // by price and mileage from and to
      return  item.mileage >= `${millageFrom}` && item.mileage <= `${millageTo}` && item.rentalPrice === `$${rentalPrice}`;

    } else if (make !== ' ' && make && millageTo !== ' ' && millageTo && millageFrom !== ' ' && millageFrom) {
      //console.log('3 >  make and milleage all'); // by make and mileage from and to
      return item.mileage >= `${millageFrom}` && item.mileage <= `${millageTo}` && item.make === make;

    } else if (rentalPrice !== ' ' && make !== ' ' && make && rentalPrice && millageTo !== ' ' && millageTo) {
      //console.log('4 >  mileage to price and make'); // by price and mileage to
      return item.make === make && item.mileage <= `${millageTo}` && item.rentalPrice === `$${rentalPrice}` ; 

    } else if (rentalPrice !== ' ' && make !== ' ' && make && rentalPrice && millageFrom !== ' ' && millageFrom) {
      //console.log('5 >  mileage from price and make'); // by price and mileage to
      return item.make === make &&  item.mileage >= `${millageFrom}` && item.rentalPrice === `$${rentalPrice}`; 

    } else if (rentalPrice !== ' ' && rentalPrice && millageFrom !== ' ' && millageFrom) {
      //console.log('6 > mileage from and price'); // by make and mileage from
      return item.mileage >= `${millageFrom}` && item.rentalPrice === `$${rentalPrice}` && item.make === make   ; 
   
    } else if (rentalPrice !== ' ' && rentalPrice && millageTo !== ' ' && millageTo) {
      //console.log('7 >  mileage to and price'); // by price and mileage to
      return item.mileage <= `${millageTo}` && item.rentalPrice === `$${rentalPrice}`; 

    } else if (make !== ' ' && make && millageFrom !== ' ' && millageFrom ) {
      //console.log('8 >  mileage from and make'); // by price and mileage from
      return item.mileage >= `${millageFrom}` &&  item.make === make; 

    } else if (make !== ' ' && make && millageTo !== ' ' && millageTo) {
      //console.log('9 >  mileage to and make'); // by make and mileage to
      return item.mileage <= `${millageTo}` && item.make === make  ; 

    } else if (make !== ' ' && make && rentalPrice !== ' ' && rentalPrice) {
      //console.log('10 > make and price'); // by price and make
      return item.rentalPrice === `$${rentalPrice}` && item.make === make ; 

    } else if (millageFrom !== ' ' && millageFrom) {
      //console.log('11 > only mileage from'); //mileage from
      return item.mileage >= `${millageFrom}`; 

    } else if (millageTo !== ' ' && millageTo) {
      //console.log('12 >  only mileage to'); // mileage to
      return item.mileage <= `${millageTo}`; 

    } else if (rentalPrice !== ' ' && rentalPrice) {
      //console.log('13 > only price'); //price
      return item.rentalPrice === `$${rentalPrice}`; 

    } else if (make !== ' ' && make) {
      //console.log('14 > only make');
      return item.make === make; //make
    }
    return item; //all
  });
}
