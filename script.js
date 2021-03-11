const anchor = document.querySelectorAll("ul li a");
const li = document.querySelectorAll("ul li");
console.log(li);
for (const link of li) {
  link.addEventListener("click", function () {
    this.classList.add("active");
    li.forEach((l) => {
      if (l !== this) {
        l.classList.remove("active");
      }
    });
  });
}

for (const link of anchor) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();

  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}
