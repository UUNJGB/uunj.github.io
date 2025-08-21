// Header glow effect on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "#000022";
  } else {
    header.style.background = "#111122";
  }
});

