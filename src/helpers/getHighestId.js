export const getHighestId = (arr) => {
  if (arr.length === 0) return 0;
  return Math.max(...arr.map((object) => object.id)) + 1;
};
