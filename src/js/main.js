import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  {
    // bubble interactive

    const interBubble = document.querySelector(".interactive");
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move(followElem) {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      followElem.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(() => {
        move(followElem);
      });
    }

    window.addEventListener("mousemove", (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move(interBubble);
  }

  {
    // Burger menu
    const burger = document.querySelector(".header-burger-icon");
    const menu = document.querySelector(".header-burger-links");
    const bg = document.querySelector(".background");

    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      menu.classList.toggle("active");
      bg.classList.toggle("active");
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        burger.classList.remove("active");
        menu.classList.remove("active");
        bg.classList.remove("active");
      }
    });
  }

  {
    // carrousel
    const carrousel = document.querySelector(".carrousel");
    const items = document.querySelectorAll(".carrousel-item");

    function getItemWidthIncludingMargin() {
      const style = getComputedStyle(items[0]);
      const margin =
        parseFloat(style.marginLeft) + parseFloat(style.marginRight);
      return items[0].offsetWidth + margin;
    }

    function isAtEnd() {
      return (
        Math.ceil(carrousel.scrollLeft + carrousel.offsetWidth) >=
        carrousel.scrollWidth
      );
    }

    function isAtStart() {
      return carrousel.scrollLeft <= 0;
    }

    // NEXT (right)
    document.querySelector(".next").addEventListener("click", () => {
      const scrollAmount = getItemWidthIncludingMargin();
      if (isAtEnd()) {
        carrousel.scrollTo({ left: 0, behavior: "smooth" }); // Go to start
      } else {
        carrousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    });

    // PREV (left)
    document.querySelector(".prev").addEventListener("click", () => {
      const scrollAmount = getItemWidthIncludingMargin();
      if (isAtStart()) {
        carrousel.scrollTo({ left: carrousel.scrollWidth, behavior: "smooth" }); // Go to end
      } else {
        carrousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    });

    carrousel.addEventListener("mouseenter", () => {
      carrousel.addEventListener("mousemove", (event) => {
        const rect = carrousel.getBoundingClientRect();
        tgX = event.clientX - rect.left;
        tgY = event.clientY - rect.top;
      });
      move(document.querySelector(".carrousel-cta"));
    });
  }

  {
    // Random Color
    const colors = ["#BAEFF3", "#D351E2", "#F5CC13", "#FD2E08"];

    function applyRandomColorOnHover(elements, property) {
      elements.forEach((element) => {
        let previousColor = null;

        element.addEventListener("mouseenter", function () {
          let randomColor;

          do {
            randomColor = colors[Math.floor(Math.random() * colors.length)];
          } while (randomColor === previousColor);

          previousColor = randomColor;
          element.style.setProperty(property, randomColor);
        });
      });
    }

    const buttonElements = document.querySelectorAll(".btn");
    applyRandomColorOnHover(buttonElements, "--random-color");
    applyRandomColorOnHover(
      document.querySelectorAll("footer a"),
      "--random-color"
    );
    applyRandomColorOnHover(
      document.querySelectorAll(".presse"),
      "--random-color"
    );
    applyRandomColorOnHover(
      document.querySelectorAll(".header-burger-link a"),
      "--random-color"
    );
  }

  {
    //hide banner / show footer on scroll
    const banner = document.querySelector(".banner-text-container");
    const footer = document.querySelector("footer");

    ScrollTrigger.create({
      trigger: "#books",
      start: "top top",
      onEnter: () => {
        gsap.set(banner, { display: "none" });
        gsap.set(footer, { display: "block" });
      },
      onLeaveBack: () => {
        gsap.set(banner, { display: "flex" });
        gsap.set(footer, { display: "none" });
      },
    });
  }

  {
    const carrouselVids = document.querySelectorAll(".carrousel-item video");

    carrouselVids.forEach((video) => {
      video.addEventListener("mouseenter", () => {
        video.setAttribute("controls", "");
      });
      video.addEventListener("mouseleave", () => {
        video.removeAttribute("controls", "");
      });
    });
  }
});
