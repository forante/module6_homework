function func1(a) {
  return function func2(b) {
    return a + b;
  };
}

let result = func1(5);

console.log(result(4));
