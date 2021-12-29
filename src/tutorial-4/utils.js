const getRandomInRange = (low, high) => {
  const newLow = Math.ceil(low);
  const newHigh = Math.floor(high);

  return Math.floor(Math.random() * (newHigh - newLow + 1)) + newLow;
};

export const getRandomArrElem = (arr) => {
  return arr.slice()[getRandomInRange(0, arr.length - 1)];
};
