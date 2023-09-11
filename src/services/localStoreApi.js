export const readFromLS = label => {
  const res = localStorage.getItem(`${label}`);
  return JSON.parse(res);
};

export const writeToLS = (label, data) => {
  localStorage.setItem(`${label}`, JSON.stringify(data));

};
