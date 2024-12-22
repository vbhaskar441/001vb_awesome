function Arthimetic(a, b) {
  const c = a + b;
  function mul(a) {
    const d = a * c;
    return d;
  }

  function add(a) {
    const d = a + c;
    return d;
  }
  function sub(a) {
    const d = a - b;
    return d;
  }

  function divide(a) {
    const d = a / c;
    return d;
  }

  return { mul, add, sub, divide };
}

const a = 10;
const b = 5;
const mult = Arthimetic(a, b);
console.log(mult);
console.log(mult.sub(a, b));
console.log(mult.divide(a, b));

function sum(a, b) {
  const c = a + b;
  return function sub(a) {
    const d = a - b;
    return d;
  };
}

const mult2 = sum(a, b);
console.log(mult2(a));
