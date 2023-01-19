// const x = window.prompt();
// window.alert(x);

// const run = (x, y) => {
//   console.log(typeof x);
//   console.log(typeof y);
//   return parseFloat(x) + parseFloat(y);
// };
// const inputX = window.prompt(`Input inputX`);
// const InputY = window.prompt(`Input InputY`);
// const area = width * bread;
// window.alert(run(inputX, InputY));

// const answer = window.confirm(`are you done ? `);
// window.alert(answer ? `yes..` : `no`);
// const myName = window.prompt();
// console.dir(console);

// const myName = window.prompt(`What is your name?`);
// console.log(`My name is ${myName}`);

// const h1 = document.getElementsByTagName(`h1`)[0];

// console.dir(h1);
// console.log(h1.title);
// console.log(h1.style);
// console.log(h1.style.color);
// console.log(h1.innerText);

// const showAlert = (event, x, y) => alert(x + y);

// const btn = document.querySelector(`#btn`);
// btn.onclick = () => alert(`I am btn property`);
// console.dir(btn);
// btn.onclick = showAlert.bind(null, event, 3, 4);

// btn.addEventListener(`click`, showAlert.bind(null, event, 3, 3));

// const h1 = document.querySelector(`h1`);

// h1.addEventListener(`mouseenter`, () => console.log(`mouse enter`));
// h1.addEventListener(`mouseout`, () => console.log(`mouse out`));
// h1.addEventListener(`mousemove`, () => console.log(`mouse move`));
const input = document.querySelector(`input`);
const form = document.querySelector(`form`);

// input.addEventListener(`keydown`, () => console.log(`keydowm event`));
input.addEventListener(`change`, () => console.log(`change event`));
input.addEventListener(`blur`, () => console.log(`blur event`));
input.addEventListener(`focus`, () => console.log(`focus event`));
input.addEventListener(`keyup`, () => console.log(`keyup event`));
form.addEventListener(`submit`, () => console.log(`form submit event`));

window.addEventListener(`load`, () => console.log(`window load`));
console.log(`one`)
console.log(`two`)
console.log(`three`)