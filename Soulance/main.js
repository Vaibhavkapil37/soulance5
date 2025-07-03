const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header__content .bar", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".header__image__card", {
  duration: 1000,
  interval: 500,
  delay: 2500,
});
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  const navBtns = document.querySelector(".nav__btns");

  if (user) {
    // ✅ User is logged in
    navBtns.innerHTML = `
      <button class="btn profile__btn">Profile</button>
      <button class="btn logout__btn">Logout</button>
    `;

    document.querySelector(".logout__btn").addEventListener("click", () => {
      signOut(auth)
        .then(() => {
          window.location.reload(); // Reload to show login buttons again
        })
        .catch((error) => {
          alert("Error signing out:", error.message);
        });
    });
  } else {
    // ❌ User is not logged in (leave default Sign In / Sign Up buttons)
  }

});