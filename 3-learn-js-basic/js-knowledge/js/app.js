//
// function sync() {
//   console.log("a");
//   for (let i = 1; i < 5; i++) {
//     console.log(i, "b");
//   }
//   console.log("c");
// }
// sync();

// function asyncFunction() {
//   fetch("https://dummyjson.com/products/1")
//     .then((res) => res.json())
//     .then((json) => console.log(json));

//   fetch("https://dummyjson.com/products/2")
//     .then((res) => res.json())
//     .then((json) => console.log(json));

//   fetch("https://dummyjson.com/products/3")
//     .then((res) => res.json())
//     .then((json) => console.log(json));

//   fetch("https://dummyjson.com/products/4")
//     .then((res) => res.json())
//     .then((json) => console.log(json));

//   fetch("https://dummyjson.com/products/5")
//     .then((res) => res.json())
//     .then((json) => console.log(json));
// }

// asyncFunction();

// function run() {
//   console.log("a");
//   let z = 0;
//   for (let i = 1; i <= 9999999999; i++) {
//     // console.log("");
//     z += i;
//   }
//   console.log(z);
//   setTimeout(() => {
//     console.log("b");
//   }, 1);
//   console.log("c");
// }
// run();

// const i = "i";
// console.log("a");
// console.log("b");
// try {
//   // i = 1;
//   console.log(i);
// } catch (e) {
//   console.log(e.message);
// } finally {
//   console.log("final");
// }
// console.log("c");
// console.log("d ");

// function run() {
//   const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const num = Math.floor(Math.random() * 10);
//       if (num >= 5) {
//         resolve(num);
//       } else {
//         reject(num);
//       }
//     }, 3000);
//   });
//   console.log(p);
//   p.then((data) => console.log("pass", data));
//   p.catch((data) => console.log("fail", data));
//   return p;
// }

// function run() {
//   const product1 = fetch("https://dummyjson.com/products/1");
//   product1.then((data) => data.json()).then((json) => console.log(json));

//   const product2 = fetch("https://dummyjson.com/products/2");
//   product2.then((data) => data.json()).then((json) => console.log(json));

//   const product3 = fetch("https://dummyjson.com/products/3");
//   product3.then((data) => data.json()).then((json) => console.log(json));
//   // product.catch((data) => console.log(data));
//   // console.log(product);
// }
// run();
// async function go() {
//   const product1 = await fetch("https://dummyjson.com/products/1");
//   const response1 = await product1.json();
//   console.log(response1);

//   const product2 = await fetch("https://dummyjson.com/products/2");
//   const response2 = await product2.json();
//   console.log(response2);

//   const product3 = await fetch("https://dummyjson.com/products/3");
//   const response3 = await product3.json();
//   console.log(response3);

//   const product4 = await fetch("https://dummyjson.com/products/4");
//   const response4 = await product4.json();
//   console.log(response4);

//   const product5 = await fetch("https://dummyjson.com/products/5");
//   const response5 = await product5.json();
//   console.log(response5);
// }
// go();
const btn = document.querySelector("button");
// const openUploader = () => {
//   const openFile = showOpenFilePicker({
//     types: [
//       {
//         description: "Images",
//         accept: {
//           "image/*": [".png", ".gif", ".jpeg", ".jpg"],
//         },
//       },
//     ],
//     excludeAcceptAllOption: true,
//     multiple: false,
//   });
//   console.log(openFile);
//   const response1 = openFile.then((data) => data[0].getFile());
//   response1.then((data) => console.log(data));
// };

const openUploader = async () => {
  const openFile = await showOpenFilePicker({
    types: [
      {
        description: "Images",
        accept: {
          "image/*": [".png", ".gif", ".jpeg", ".jpg"],
        },
      },
    ],
    excludeAcceptAllOption: true,
    multiple: false,
  });
  console.log(openFile);
  const file = await openFile[0].getFile();
  // response1.then((data) => console.log(data));
  console.log(file);
};
btn.addEventListener("click", openUploader);
