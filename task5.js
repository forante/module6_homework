const toExp = (x, n) => {
  let result = x;

  if (n === 0) return 1;

  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
};

console.log(toExp(3, 3));
