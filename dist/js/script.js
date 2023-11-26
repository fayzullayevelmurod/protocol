document.addEventListener("DOMContentLoaded", function () {
  const accordionTriggers = document.querySelectorAll(".accordion-trigger");

  accordionTriggers.forEach((trigger, index) => {
    trigger.addEventListener("click", function () {
      accordionTriggers.forEach((accTrigger) => {
        accTrigger.classList.remove("active");
        accTrigger.nextElementSibling.classList.add("hidden");
      });

      this.classList.add("active");
      const content = this.nextElementSibling;
      content.classList.remove("hidden");
    });

    if (index === 0) {
      trigger.classList.add("active");
      trigger.nextElementSibling.classList.remove("hidden");
    }
  });
});

const light = document.querySelector(".light");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
  }
};

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
};

light.addEventListener("click", () => {
  themeSwitch();
});

themeCheck();

const menuItems = document.querySelectorAll(".sidebar-ul li a");
function handleMenuClick(event) {
  event.preventDefault();
  menuItems.forEach((item) => item.classList.remove("activeda"));
  event.target.classList.add("activeda");
}

const bars = document.querySelector(".bars");
const close = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar-wrapper");
const bgact = document.querySelector(".bg_remove");
const header = document.querySelector(".header");

bars.addEventListener("click", function () {
  close.classList.remove("hidden");
  bars.classList.add("hidden");
  header.classList.add("header_bg");
  sidebar.classList.add("nav_active");
  bgact.classList.add("bg_active");
  rightSidebar.classList.remove("right_sidebar_active");
  rightClose.classList.add("hidden");
  rightBars.classList.remove("rightbars_active");
});
close.addEventListener("click", function () {
  close.classList.add("hidden");
  bars.classList.remove("hidden");
  header.classList.remove("header_bg");
  sidebar.classList.remove("nav_active");
  bgact.classList.remove("bg_active");
});
bgact.addEventListener("click", function () {
  close.classList.add("hidden");
  header.classList.remove("header_bg");
  bgact.classList.remove("bg_active");
  bars.classList.remove("hidden");
  sidebar.classList.remove("nav_active");
  rightSidebar.classList.remove("right_sidebar_active");
  rightClose.classList.add("hidden");
  rightBars.classList.remove("rightbars_active");
});

const rightBars = document.querySelector(".right-bars");
const rightClose = document.querySelector(".right-close");
const rightSidebar = document.querySelector(".right-sidebar-wrapper");

rightBars.addEventListener("click", function () {
  rightClose.classList.remove("hidden");
  rightBars.classList.add("rightbars_active");
  header.classList.add("header_bg");
  rightSidebar.classList.add("right_sidebar_active");
  bgact.classList.add("bg_active");
  sidebar.classList.remove("nav_active");
  close.classList.add("hidden");
  bars.classList.remove("hidden");
});
rightClose.addEventListener("click", function () {
  rightClose.classList.add("hidden");
  rightBars.classList.remove("rightbars_active");
  header.classList.remove("header_bg");
  rightSidebar.classList.remove("right_sidebar_active");
  bgact.classList.remove("bg_active");
});

const cardsContainerList = document.querySelectorAll(".focus");

cardsContainerList.forEach(function (cardsContainer) {
  cardsContainer.addEventListener("mousemove", function (e) {
    let x = e.pageX - this.offsetLeft;
    let y = e.pageY - this.offsetTop;

    this.style.background =
      "radial-gradient(circle at " +
      x +
      "px " +
      y +
      "px , #34d3991d, transparent 80%)";
  });

  cardsContainer.addEventListener("mouseleave", function () {
    this.style.background = "";
  });
});
