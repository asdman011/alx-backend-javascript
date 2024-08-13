function hasValuesFromArray(set, arr) {
  return arr.every((item) => set.has(item));
}

module.exports = hasValuesFromArray;
