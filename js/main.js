

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
})