export const getCity = address => {
  const splitedAdress = address.split(', ');
  const formated = splitedAdress.slice(1, -1).toString();
  return formated;
};

export const getCountry = address => {
  const splitedAdress = address.split(', ');
  const formated = splitedAdress.slice(2).toString();
  return formated;
};

export const formatMillage = (millage)=>{
  const formatted = Number(millage).toLocaleString()
  return formatted
}

export const arrayFromString = (string)=>{
  const arrayed = string.split('\n')
  return arrayed
}