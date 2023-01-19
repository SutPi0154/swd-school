// // const fun = function (x, y) {
// //   return x + y;
// // };
// const funadd2 = (x, y) => x + y;

// const fun = new Function(`x`, `y`, `return x+y`);
// console.log(fun.bind(null, 1, 2).call());

// const obj = {
//   a: `aa`,
//   b: `bbb`,
//   c: `cc`,
// };
// console.log(obj.hasOwnProperty(`a`));
// console.log(Object.keys(obj));

// function run(...x) {
// //   console.log(x);
//   return x.reduce((pv, cv) => {
//     return pv + cv;
//   }, 0);
// }
// console.log(run(2, 2, 2, 2, 2));
const arr = [10, 20];
console.log(arr[0]);

const [a, b] = arr;
