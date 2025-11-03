const $ = document.getElementById("header");
$.addEventListener("scroll", () => {
  $.classList.toggle("scrolled", window.scrollY > 50);
});

const cards = document.querySelectorAll(".second-card.hidden");
const btn = document.getElementById("btn");
let expanded = false;

btn.addEventListener("click", () => {
  expanded = !expanded;
  cards.forEach((card) => {
    card.classList.toggle("hidden", !expanded);
  });
  btn.textContent = expanded ? "Ver menos" : "Ver más";
});
