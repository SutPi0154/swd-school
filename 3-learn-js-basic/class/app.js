// // class Person {
// //   //properties
// //   name = `mg mg`;
// //   age = 23;

// //   //method
// //   run() {
// //     return `mg mg can run`;
// //   }
// // }
// // // console.log(Person);

// // // class => object ( intantiate )

// // const person = new Person();

// // console.log(person);
// // console.log(person.name);
// // console.log(person.age);
// // console.log(person.run());

// class Student {
//   // name , gender ,major ,age
// }

// const st1 = new Student();

// st1.name = `mg mg`;
// st1.age = 15;
// st1.gender = `male`;
// st1.major = `bio`;
// st1.learn = function () {
//   return st1.name + ` can learn everything`;
// };

// const st2 = new Student();

// st2.name = `hla hla`;
// st2.age = 15;
// st2.gender = `femlae`;
// st2.major = `eco`;

// console.log(st1);
// console.log(st2);

// const obj = {
//   name: `kyaw kyaw`,
//   age: 14,
//   gender: `male`,
// };

// console.log(obj);

// class Student {
//   constructor(inputName, inputAge, inputGender, inputMajor) {
//     this.name = inputName;
//     this.age = inputAge;
//     this.gender = inputGender;
//     this.major = inputMajor;

//     this.subjects = [`myan`, `eng`, `maths`, `che`, `phy`, this.major];
//   }
//   learn() {
//     return this.name + `can learn ` + this.subjects;
//   }
// }

// class Monitor extends Student {
//   room = `Grade 1`;
//   // constructor
// }

// const st1 = new Student(`mg mg`, 15, `male`, `boi`);
// console.log(st1);
// console.log(st1.learn());

// const ga1 = new Monitor(`zaw zaw`, 17, `male`, `bio`);
// console.log(ga1);

// const st2 = new Student(`hla hla`, 14, `female`, `eco`);
// console.log(st2);

// class A {
//   a = `aaa`;
// }

// class B extends A {
//   b = `bbb`;
// }

// const b = new B();
// console.log(b);

// const a = new A();

// console.log(a);

// Build in Obj
// const d = new Date();
// console.log(d);
// console.log(d.toLocaleDateString());
// console.log(d.toLocaleTimeString());
// console.log(d.getDate());
// console.log(d.getMilliseconds());
// console.log(d.getMonth());
// console.log(d.getFullYear());
// console.log(d.getTimezoneOffset());
// console.log(d.getTime());

// const d = new Date(1231197946564);

// // d.setDate(d.getDate() + 25);

// console.log(d.toDateString());

// // String
// const str = new String(`min ga lar par`);
// console.log(str);
// // console.log(str.toUpperCase());
// // console.log(str.toLowerCase());
// // console.log(str.length);
// // console.log(str.substring(4, 5));
// // console.log(str);
// // console.log(str.search(`ga`));
// // console.log(str.replace(`ga`, `ya`));
// // console.log(str.replaceAll(`ar`, `ya`));
// // console.log(str.trim().length);
// // console.log(str.trimEnd());
// const luckyNum = `3454656zfd`;
// console.log(luckyNum.padStart(16, `d`));
// console.log(str.trim().split(` `));
// console.log(str.trim().split(` `, 3));
// const num = new Number(`354556.75543`);
// console.log(num);
// console.log(num.toString());
// console.log(num.toFixed(2));
// console.log(num.toPrecision(2));
// console.log(Number(`46456`));

// // build in Obj
// const weight = `167.445kg`;

// console.log(parseInt(num));
// console.log(parseFloat(num));

// // console.log(weight.toFixed());
// console.log(parseInt(weight));

// console.log(isNaN(`sut` + 4));
// console.log(eval(`5+4`));

// function run(x, y) {
//   return y(x);
// }
// console.log(
//   run(5, function (x) {
//     return x + 5;
//   })
// );

// // arrow function 
// const run = (x, y) => x + y;
// console.log(run());

// const abc = () => `this is arrow function`;

// const ok = (x, y) => {
//   let result = x * y;
//   return ` the result is ` + result;
// };

// console.log(abc())
// console.log(ok(5,7));
