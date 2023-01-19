const result = document.getElementById(`result`);
const store = document.getElementById(`store`);
const clear = document.getElementById(`clear`);
const width = document.getElementById(`width`);
const breadth = document.getElementById(`breadth`);
const calculate = document.getElementById(`calculate`);
const records = document.getElementById(`records`);

// calculate.onclick = () => {
//   CalcArea = `${width.innerText}ft` * `${breadth.innerText}`;
//   console.log(CalcArea);
// };
const clearResult = () => (result.innerHTML = null);

const CalcArea = () => {
  const area = width.valueAsNumber * breadth.valueAsNumber;
  //   console.log(typeof area);
  //   console.log(typeof width.valueAsNumber);
  //   console.log(typeof breadth.valueAsNumber);
  result.innerText = `width :${width.value}ft * breadth :${breadth.value}ft = ${area}sqft`;
  width.value = breadth.value = null;
};
calculate.onclick = CalcArea;

clear.onclick = clearResult;
store.onclick = () => {
  records.innerHTML += `<li> ${result.innerHTML} </li>`;
  clearResult();
};
