document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header"),
    burgerMenu = document.querySelector(".burger-menu"),
    menu = document.querySelector(".menu"),
    headerLogo = document.querySelector(".header__logo"),
    anchors = document.querySelectorAll('a[href*="#"]');

  function toggleMobileMenu() {
    header.classList.toggle("mobile");
    headerLogo.classList.toggle("hide");
    menu.classList.toggle("show");
    burgerMenu.classList.toggle("menu-on");
  }

  function hideMobileMenu() {
    header.classList.remove("mobile");
    headerLogo.classList.remove("hide");
    menu.classList.remove("show");
    burgerMenu.classList.remove("menu-on");
  }

  burgerMenu.addEventListener("click", toggleMobileMenu);
  window.addEventListener("scroll", hideMobileMenu);

  // smooth scroll

  for (let anchor of anchors) {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();

      const blockID = anchor.getAttribute("href").substring(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
});
