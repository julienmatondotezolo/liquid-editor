export const setToStorage = (key, items) => {
  window.localStorage.setItem(key, JSON.stringify(items));
};
