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

const arr = [1, 3, 4, 3, 4, 3, 4];

[a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

const obj = {
  id: 1,
};
