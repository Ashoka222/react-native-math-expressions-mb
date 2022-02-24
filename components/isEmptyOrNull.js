function isEmptyOrNull(item) {
  return item === null || item === undefined || item === "" || item === NaN;
}

export default isEmptyOrNull;
