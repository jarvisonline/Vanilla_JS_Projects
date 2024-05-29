let item = document.querySelectorAll(".container li");

let activeLink = (elem) => {
  item.forEach((link) => {
    link.classList.remove("active");
  });
  elem.classList.add("active");
};

item.forEach((link) => {
  link.addEventListener("click", (e) => {
    activeLink(e.target);
  });
});
