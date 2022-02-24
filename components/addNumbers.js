function addNumbers(...arg) {
  let params = arg;
  if (params.length === 0) {
    throw "Parameters are missing in addNumber function.";
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
        throw "Only numbers are allowed in addNumber function.";
      }
    }
  } else if (params.length !== nonIntegers.length) {
    throw "Only numbers are allowed in addNumber function.";
  }
  return params.reduce((prevValue, currentValue) => {
    return (parseFloat(prevValue) + parseFloat(currentValue)).toFixed(2);
  });
}

export default addNumbers;
