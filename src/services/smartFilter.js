export default function smartFilter(data, obj) {

  const { make, rentalPrice, millageFrom, millageTo } = obj;

  return data.filter(item => {
    if (make !== ' ' && make && rentalPrice !== ' ' && rentalPrice && millageTo !== ' ' && millageTo && millageFrom !== ' ' && millageFrom ) {
     // console.log('1 all 4'); // by all 4 queries
      return  item.make === make && item.rentalPrice === `$${rentalPrice}` && item.mileage >= `${millageFrom}` &&  item.mileage <= `${millageTo}`  ;

    } else if (rentalPrice !== ' ' && rentalPrice && millageTo !== ' ' && millageTo && millageFrom !== ' ' && millageFrom ) {
     // console.log('2 price and mileage all'); // by price and mileage from and to
      return  item.rentalPrice === `$${rentalPrice}` && item.mileage >= `${millageFrom}` && item.mileage <= `${millageTo}`;

    } else if (make !== ' ' && make && millageTo !== ' ' && millageTo && millageFrom !== ' ' && millageFrom) {
     // console.log('3 make and milleage all'); // by make and mileage from and to
      return item.make === make && item.mileage >= `${millageFrom}` && item.mileage <= `${millageTo}`;

    } else if (rentalPrice !== ' ' && rentalPrice && millageFrom !== ' ' && millageFrom) {
      // console.log('4 mileage from and price'); // by make and mileage from
       return item.rentalPrice === `$${rentalPrice}` && item.make === make && item.mileage >= `${millageFrom}`  ; 

       
    } else if (rentalPrice !== ' ' && rentalPrice && millageTo !== ' ' && millageTo) {
      // console.log('6 mileage to and price'); // by price and mileage to
       return item.rentalPrice === `$${rentalPrice}` && item.mileage <= `${millageTo}`; 

    } else if (make !== ' ' && make && millageFrom !== ' ' && millageFrom ) {
        // console.log('7 mileage from and make'); // by price and mileage from
         return item.make === make && item.mileage >= `${millageFrom}`; 


    } else if (make !== ' ' && make && millageTo !== ' ' && millageTo) {
     // console.log('5 mileage to and make'); // by make and mileage to
      return item.make === make && item.mileage <= `${millageTo}`; 

      


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
