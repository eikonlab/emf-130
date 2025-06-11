document.addEventListener("DOMContentLoaded", () => {
  {
    // bubble interactive

    const interBubble = document.querySelector(".interactive");
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(() => {
        move();
      });
    }

    window.addEventListener("mousemove", (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();
  }

  {
    // Burger menu
    const burger = document.querySelector(".header-burger-icon");
    const menu = document.querySelector(".header-burger-links");

    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      menu.classList.toggle("active");
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        burger.classList.remove("active");
        menu.classList.remove("active");
      }
    });
  }
});
