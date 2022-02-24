function subNumbers(...arg) {
  let params = arg;
  if (params.length === 0) {
    throw "Parameters are missing in subNumbers function.";
  }
  let nonIntegers = params.filter((value, index) => {
    return /^\d+$/.test(value);
  });
  if (nonIntegers.length === 0) {
    if (params.length === 1) {
      let intValue = params[0].split(",");
      params = intValue;
      let nonIntegers = params.filter((value, index) => {
        return /^\d+$/.test(value);
      });
      if (params.length !== nonIntegers.length) {
        throw "Only numbers are allowed in subNumbers function.";
      }
    }
  } else if (params.length !== nonIntegers.length) {
    throw "Only numbers are allowed in subNumbers function.";
  }
  return params.reduce((prevValue, currentValue) => {
    return (parseFloat(prevValue) - parseFloat(currentValue)).toFixed(2);
  });
}

export default subNumbers;
