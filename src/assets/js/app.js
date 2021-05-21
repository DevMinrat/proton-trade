document.addEventListener("DOMContentLoaded", () => {
  //= components/mail.js

  const header = document.querySelector(".header"),
    burgerMenu = document.querySelector(".burger-menu"),
    menu = document.querySelector(".menu"),
    headerLogo = document.querySelector(".header__logo"),
    anchors = document.querySelectorAll('a[href*="#"]'),
    textarea = document.querySelector("#message"),
    counterCurrent = document.querySelector(".textarea-counter__current"),
    counterTotal = (document.querySelector(
      ".textarea-counter__total"
    ).textContent = textarea.maxLength),
    toTopBtn = document.querySelector(".arrow-top");

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

  // counter contacts symbols

  textarea.addEventListener("input", () => {
    counterCurrent.textContent = textarea.value.length;
  });

  // button_up

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 580) {
      toTopBtn.style.display = "block";
    } else {
      toTopBtn.style.display = "none";
    }
  });

  toTopBtn.addEventListener("click", function () {
    window.scrollBy({
      top: -document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  });
});
