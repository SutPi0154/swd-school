// const fonts = [
//   `Rubik Bubbles`,
//   `Roboto Condensed`,
//   `Moon Dance`,
//   `East Sea Dokdo`,
// ];

// const output = document.querySelector(`#output`);
// const text = document.querySelector(`#text`);
// const count = document.querySelector(`#count`);
// const color = document.querySelector(`#color`);
// const fs = document.querySelector(`#fs`);
// const fontFamily = document.querySelector(`#fontFamily`);

// fonts.forEach((font) => {
//   fontFamily.append(new Option(font, font));
// });

// text.addEventListener(`keyup`, (event) => {
//   output.innerText = text.value;
//   count.innerText = text.value.length;
// });

// color.addEventListener(`change`, (event) => {
//   output.style.color = event.target.value;
// });
// fs.addEventListener(`change`, (event) => {
//   output.style.fontSize = event.target.value + `px`;
// });

// fontFamily.addEventListener(`change`, (event) => {
//   output.style.fontFamily = fontFamily.value;
// });

// const arr = [1, 3, 4, 3, 4, 3, 4];

// [a, b, ...c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);

// const obj = {
//   id: 1,
// };

const arr = ["a", "b", "c", "d", "e"];

const obj = {
  brand: "apple",
  model: "macbook pro",
  spec: { cpu: "i7", ram: "16G", ssd: "1TB" },
};

const j = `["a", "b", "c", "d", "e"]`;
const j2 = `{
  "brand": "apple",
  "model": "macbook pro",
  "spec": { "cpu": "i7", "ram": "16G", "ssd": "1TB" }
}`;

// console.log(typeof j2);
// console.log(typeof j);

// console.log(JSON.parse(j));
// console.log(JSON.parse(j2));

// console.log(JSON.stringify(arr));
// console.log(JSON.stringify(obj));

// function run() {
//   const req = new XMLHttpRequest();
//   console.log(req);

//   req.open("GET", "https://fakestoreapi.com/products/");
//   req.send();
//   req.addEventListener("load", (event) => {
//     console.log(event.target.responseText);
//   });
// }

// fetch("https://fakestoreapi.com/products/")
//   .then((data) => data.json())
//   .then((json) => {
//     console.log(json);
//   });

// localStorage.setItem("MyName", "Sut Pi");
// localStorage.setItem("MyAge", 19);

// sessionStorage.setItem("myName", "Nang Sian");

document.cookie = "name=SutPi";
document.cookie = "laptop=acer";
