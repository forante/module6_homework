function spotPrimeNum(num) {
  if (num > 1000) {
    console.log(`Данные неверны`);
    return;
  }
  if (num === 0 || num === 1) {
    console.log(`Число ${num} не является простым`);
    return;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log(`Число ${num} не является простым`);
      return;
    }
  }
  console.log(`Число ${num} является простым`);
}

spotPrimeNum(191);
