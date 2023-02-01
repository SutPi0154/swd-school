// // console.log(window);
// // console.log(window.innerWidth);
// // console.log(window.innerHeight);
// // console.log(window.outerWidth);
// // console.log(window.outerHeight);

// // window.addEventListener("scroll", () => console.log(window.scrollY));

// // window.addEventListener("online", () => {
// //   console.log("U are online");
// // });

// // window.addEventListener("offline", () => {
// //   console.log("U are offline");
// // // });
// // x = 35;
// // y = 37;

// const clock = document.querySelector("#clock");
// const run = () => {
//   const d = new Date();
//   clock.innerText = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
// };

// run();

// // setTimeout(run, 5000)
// // setInterval(run);

// function text(start, stop) {
//   let i = start;
//   const run = setInterval(() => {
//     console.log("hello", ++i);
//     if (i === stop) {
//       clearInterval(run);
//     }
//   }, 1000);
// }

// for (let i = 1; i <= 4; i++) {
//   console.log(i,'loop');
// }
// console.log(i);

const run = () => console.log("I am run");

setTimeout(run, 3000);
