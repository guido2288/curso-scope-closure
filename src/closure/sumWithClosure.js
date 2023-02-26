function sumWithClosure(firstNum) {
  // Tu código aquí 👈

  return function second(secondNum) {
    if (!secondNum) {
      return firstNum
    } else {

      return firstNum + secondNum;
    }
  };
};

sumWithClosure(2)(3);