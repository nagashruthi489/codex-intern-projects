const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (container.innerText === "Light") {
    container.style.backgroundColor = "Black";
    btn.innerText = "Dark";
  } else if (btn.innerText === "Dark") {
    container.style.backgroundColor = "white";
    btn.innerText = "Light";
  }
});
