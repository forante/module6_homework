const numbers = function (a, b) {
  let counter = a;
  setInterval(() => {
    if (counter <= b) {
      console.log(counter);
      counter++;
    } else return;
  }, 1000);
};

numbers(5, 15);
