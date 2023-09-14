export const sortingByPrice = array => {
  return array.sort((a, b) => Number(a.rentalPrice.split('$')[1]) - Number(b.rentalPrice.split('$')[1]));
};
