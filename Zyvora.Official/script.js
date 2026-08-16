const menu = document.getElementById("menu");
const nav = document.getElementById("navLinks");
menu.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("#navLinks a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
