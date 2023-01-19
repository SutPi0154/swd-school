const addBtn = document.querySelector("#Addbtn");
const lists = document.querySelector("#lists");
const textInput = document.querySelector("#textInput");
const total = document.querySelector("#total");
const doneTotal = document.querySelector("#doneTotal");

const CreatLi = (text) => {
  const li = document.createElement("li");
  // li.addEventListener("dblclick", (event) => edit);
  const dynamicID = `chackedForm` + Math.random();

  li.className =
    "list-group-item d-flex justify-content-between align-items-center";
  li.innerHTML = `<div class="form-check">
  <input class="form-check-input" type="checkbox" name="flexRadioDefault" onchange="done(event)" id="${dynamicID}">
  <label class="form-check-label"  for="${dynamicID}">
    ${text}
  </label>
</div>
<div class="btn-group">
<button class="btn btn-sm btn-outline-dark edit-btn" >
<i class="bi bi-pencil-fill pe-none"></i>
</button>
  <button class="btn btn-sm btn-outline-dark del-btn" >
<i class="bi bi-trash3 pe-none"></i>
</button>
</div>`;
  return li;
};
const counter = () => {
  const totalCount = lists.children.length;
  const doneTotalCount = [...lists.children].filter(
    (el) => el.querySelector(".form-check-input").checked === true
  ).length;
  total.innerText = totalCount;
  doneTotal.innerText = doneTotalCount;
};

const addList = () => {
  if (textInput.value.trim()) {
    lists.append(CreatLi(textInput.value));
    textInput.value = null;
  } else {
    alert(`Input text is empty`);
  }
  counter();
};

// const del = (event) => {
//   if (confirm("are you sure to delete ?")) {
//     console.log(event);
//     event.target.closest("li").remove();
//   }
//   counter();
// };

const done = (event) => {
  event.target.nextElementSibling.classList.toggle(
    `text-decoration-line-through`
  );
  counter();
  // event.target.nextElementSibling.classList.toggle(
  //   `text-decoration-line-through`
  // );
};
addBtn.addEventListener("click", addList);
textInput.addEventListener(`keyup`, (event) => {
  if (event.keyCode === 13) {
    addList();
  }
});

// const edit = (event) => {
//   const old = event.target
//     .closest(".list-group-item")
//     .querySelector(".form-check-label");
//   const newText = prompt("Input new text", old.innerText);
//   if (newText && newText.trim()) {
//     old.innerText = newText;
//   }
// };

// [...lists.children].forEach((li) => {
//   li.querySelector(".edit-btn").addEventListener("click", edit);
//   li.querySelector(".del-btn").addEventListener("click", del);
// });

lists.addEventListener("click", (event) => {
  if (event.target.classList.contains("del-btn")) {
    if (confirm("are you sure to delete ?")) {
      console.log(event);
      event.target.closest("li").remove();
    }
    counter();
  } else if (event.target.classList.contains("edit-btn")) {
    const old = event.target
      .closest(".list-group-item")
      .querySelector(".form-check-label");
    const newText = prompt("Input new text", old.innerText);
    if (newText && newText.trim()) {
      old.innerText = newText;
    }
  }
});

window.addEventListener("load", counter);
