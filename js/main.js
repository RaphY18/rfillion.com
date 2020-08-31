// just to put some content

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav__links");
  const navlinks = document.querySelectorAll(".nav__links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navlinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = " ";
      } else {
        link.style.animation = `navLinkFade 0.5s ease-in-out forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    burger.classList.toggle("toggle");
  });
};

navSlide();
