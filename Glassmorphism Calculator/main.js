let btns = document.querySelectorAll(".container .btns-box .btn");
let input = document.querySelector(".container .input-box input");
let evalBtn = document.querySelector(".container .btns-box .eval-btn");
let deleteBtn = document.querySelector(".container .btns-box .delete-btn");
let acBtn = document.querySelector(".container .btns-box .ac-btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let btnText = e.target.innerText;
    input.value += btnText;
    e.target.classList.add("active");
    setTimeout(() => {
      e.target.classList.remove("active");
    }, 300);
  });
});

evalBtn.addEventListener("click", () => {
  try {
    input.value = eval(input.value);
    evalBtn.classList.add("active");
    setTimeout(() => {
      evalBtn.classList.remove("active");
    }, 300);
  } catch (err) {
    input.value = "Error";
  }
});

deleteBtn.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
  deleteBtn.classList.add("active");
  setTimeout(() => {
    deleteBtn.classList.remove("active");
  }, 300);
});

acBtn.addEventListener("click", () => {
  input.value = "";
  acBtn.classList.add("active");
  setTimeout(() => {
    acBtn.classList.remove("active");
  }, 300);
});
document.addEventListener("keydown", (e) => {
  const key = e.key;
  let activeButton;

  if (
    (key >= "0" && key <= "9") ||
    key === "." ||
    key === "/" ||
    key === "*" ||
    key === "-" ||
    key === "+"
  ) {
    input.value += key;
    activeButton = [...btns].find((btn) => btn.innerText === key);
  } else if (key === "Enter") {
    try {
      input.value = eval(input.value);
    } catch (err) {
      input.value = "Error";
    }
    activeButton = evalBtn;
  } else if (key === "Backspace") {
    input.value = input.value.substr(0, input.value.length - 1);
    activeButton = deleteBtn;
  } else if (key === "Escape") {
    input.value = "";
    activeButton = acBtn;
  }

  if (activeButton) {
    activeButton.classList.add("active");
    setTimeout(() => {
      activeButton.classList.remove("active");
    }, 300);
  }
});
