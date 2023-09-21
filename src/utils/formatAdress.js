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


export const addDecimalComa = (obj) =>{
  var num = getNumber(obj);
  if (num === 0) {
    return obj = '';
  } else {
    return Number(obj).toLocaleString();
  }

}


function getNumber(_str) {
  var arr = _str.split('');
  var out = [];
  for (var cnt = 0; cnt < arr.length; cnt++) {
    if (isNaN(arr[cnt]) === false) {
      out.push(arr[cnt]);
    }
  }
  return Number(out.join(''));
}