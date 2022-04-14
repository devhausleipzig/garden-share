export const add = (x: number, y: number) => {
  return x + y;
};

export const fizzBuzz = (n: number) => {
  if (n % 15 === 0) {
    return "fizzBuzz";
  }
  if (n % 3 === 0) {
    return "fizz";
  }
  if (n % 5 === 0) {
    return "buzz";
  }
  return n;
};
