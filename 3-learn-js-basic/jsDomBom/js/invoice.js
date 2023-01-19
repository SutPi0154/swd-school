// variable

const services = [
  {
    id: 1,
    title: "Domain Service ",
    price: 15,
  },
  {
    id: 2,
    title: "Hosting Service ",
    price: 30,
  },
  {
    id: 3,
    title: "Web Design Service ",
    price: 150,
  },
  {
    id: 4,
    title: "Maintenace Service ",
    price: 100,
  },
];
//selector

const app = document.querySelector("#app");
const invoiceForm = document.querySelector("#invoiceForm");
const quantity = document.querySelector("#quantity");
const selectService = document.querySelector("#selectService");
const lists = document.querySelector("#lists");
const subTotal = document.querySelector("#subTotal");
const tax = document.querySelector("#tax");
const total = document.querySelector("#total");
const listTable = document.querySelector("#listTable");

// function

const createTr = (service, quantity) => {
  const tr = document.createElement("tr");
  const total = service.price * quantity;
  tr.classList.add("list");
  tr.setAttribute("service-id", service.id);
  tr.innerHTML = `
  <td class="text-end d-flex justify-content-between">${service.title}<i class="bi bi-trash3 text-danger del-btn"></i></td>
  <td class="text-end list-quantity">${quantity}</td>
  <td class="text-end">${service.price}</td>
  <td class="text-end listTotal">${total}</td> 
   `;
  return tr;
};

const showTable = () => {
  if (lists.children.length) {
    listTable.classList.remove("d-none");
  } else {
    listTable.classList.remove("d-none");
  }
};

const findTotal = () => {
  // const listTotal = document.querySelectorAll(".listTotal");
  //   console.log(listTotal);
  let realTotal = [...document.querySelectorAll(".listTotal")].reduce(
    (pv, cv) => pv + parseFloat(cv.innerText),
    0
  );

  const taxTotal = findTax(realTotal);
  const netTotal = realTotal + taxTotal;

  tax.innerText = taxTotal;
  total.innerText = netTotal;
  subTotal.innerText = realTotal;
  // console.log(subTotal);
  //   listTotal.forEach((el) => (subTotal += parseFloat(el.innerText)));
};

const findTax = (amount, percentage = 5) => {
  return amount * (percentage / 100);
};
//process(tasks)

// service option loop

services.forEach(({ title, id }) =>
  selectService.append(new Option(title, id))
);
// data collect from form
invoiceForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const selectedService = services.find(({ id }) => id == selectService.value);

  const isExistedService = [...lists.children].find((el) =>
    el.getAttribute("service-id" == selectedService.id)
  );
  if (isExistedService) {
    const isExistedQuantity = isExistedService.querySelector(".list-quantity");
    isExistedQuantity.innerText =
      parseFloat(isExistedQuantity.innerText) + quantity.valueAsNumber;
      isExistedService.querySelector(".listTotal").innerText =
      isExistedService.querySelector(".list-quantity").innerText *
      selectedService.price;
  } else {
    lists.append(createTr(selectedService, quantity.valueAsNumber));
  }

  findTotal();
  showTable();

  invoiceForm.reset();
});

app.addEventListener("click", (event) => {
  const currentElement = event.target;
  if (event.target.classList.contains("del-btn")) {
    currentElement.closest("tr").remove();
    findTotal();
  }
  showTable();
});
