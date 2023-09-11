export const readFromLS = label => {
  const res = sessionStorage.getItem(`${label}`);
  return JSON.parse(res);
};

export const writeToLS = (label, data) => {
  sessionStorage.setItem(`${label}`, JSON.stringify(data));

};
