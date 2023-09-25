export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  if (tabMenu.length && tabContent.length) {
    tabMenu[1].classList.add("active");
    tabContent[1].classList.add("active");

    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove("active");
      });
      const direction = tabContent[index].dataset.anime;
      tabContent[index].classList.add("active", direction);

      tabMenu.forEach((content) => {
        content.classList.remove("active");
      });
      tabMenu[index].classList.add("active");
    }

    document.querySelector("[data-tab='menu']").addEventListener("click", (event) => {
      if (event.target.tagName === "LI") {
        const index = Array.from(tabMenu).indexOf(event.target);
        if (index !== -1) {
          activeTab(index);
        }
      }
    });
  }
}