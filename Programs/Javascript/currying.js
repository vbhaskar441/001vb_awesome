//https://stackblitz.com/edit/javascript?file=index.js

function sum(a) {
  //return a+b;
  return (b) => {
    const c = a + b;
    return function sum(d) {
      return c + d;
    };
  };
}
const sum1 = sum(5)(16)(10);
console.log(sum1);
