function checkDivisibleBy3And5(a) {
  if ((a % 3 === 0, a % 5 === 0)) {
    return `${a} có thể chia hết cho 3 và 5`;
  } else {
    return `${a} không thể chia hết cho 3 và 5`;
  }
}
