// ============ TYPED TEXT EFFECT ============
const roles = [
  "AI/ML Enthusiast",
  "Full-Stack Developer",
  "Computer Vision Explorer",
  "B.Tech CS Student"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.querySelector(".typed-text");

function typeLoop() {
  if (!typedEl) return;

  const currentRole = roles[roleIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typedEl.textContent = currentRole.substring(0, charIndex);

  let typeSpeed = 90;

  if (isDeleting) {
    typeSpeed = 45;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    typeSpeed = 1400; // pause at full word
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typeSpeed = 400;
  }

  setTimeout(typeLoop, typeSpeed);
}

typeLoop();

// ============ MOBILE HAMBURGER MENU ============
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // close menu when a link is clicked
  const allNavLinks = navLinks.querySelectorAll("a");
  allNavLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });
}

// ============ NAVBAR BACKGROUND ON SCROLL ============
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 30) {
    navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
  } else {
    navbar.style.boxShadow = "none";
  }
});
