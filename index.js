const $ = document.getElementById("header");
$.addEventListener("scroll", () => {
  $.classList.toggle("scrolled", window.scrollY > 50);
});
