export const getFromStorage = (key) => {
  JSON.parse(window.localStorage.getItem(key));
};
