

window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabs__item");

  tabs.forEach((tab) => {
    if (!tab.classList.contains("tabs__item_active")) {
      tab.addEventListener("click", () => {
        tabs.forEach((otherItem) => {
          if (otherItem.classList.contains("tabs__item_active")) {
            otherItem.classList.remove("tabs__item_active");
          }
        });
        tab.classList.add("tabs__item_active");
      });
    }
  });

  $(".carousel").slick({
    autoPlay: true,
    autoPlaySpeed: 5000,
    prevArrow:
      `<div class="carousel__arrow carousel__prev"><i class="fas fa-chevron-left"></i></div>`,
    nextArrow:
      `<div class="carousel__arrow carousel__next"><i class="fas fa-chevron-right"></i></div>`
  })
})