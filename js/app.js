window.addEventListener("scroll", () => {
  // DOM elements
  let tabsContainer = document.getElementById("tabs_container");
  const tabsCol = document.querySelector(".tabs_col");
  const currentPosition = document.documentElement.scrollTop;

  if (
    tabsCol.scrollHeight - tabsContainer.scrollHeight - 20 <=
    currentPosition
  ) {
    tabsContainer = document.getElementById("tabs_container");
    let rect = tabsContainer.getBoundingClientRect();

    tabsContainer.classList.remove("position-fixed");
    tabsContainer.classList.add("position-absolute");
    tabsContainer.style.bottom = "10vh";
    tabsContainer.style.right = `${-100 + rect.y}px`;
    tabsContainer.style.width = `${tabsContainer.scrollWidth}px`;
  } else {
    tabsContainer.classList.add("position-fixed");
    tabsContainer.classList.remove("position-absolute");
    tabsContainer.removeAttribute("style");
  }
});
