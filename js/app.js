window.addEventListener("scroll", () => {
  // DOM elements
  let tabsContainer = document.getElementById("tabs_container");
  const tabsCol = document.querySelector(".tabs_col");
  const footer = document.querySelector(".footer");
  const bodyHeightMinusFooter =
    document.body.offsetHeight - footer.scrollHeight;
  const currentPosition = document.documentElement.scrollTop;
  let rect = tabsContainer.getBoundingClientRect();
  console.log("out", tabsContainer.scrollWidth);
  console.log(tabsContainer.scrollWidth);

  if (
    tabsCol.scrollHeight - tabsContainer.scrollHeight - 20 <=
    currentPosition
  ) {
    tabsContainer = document.getElementById("tabs_container");
    let rect = tabsContainer.getBoundingClientRect();

    console.log("in", rect);
    tabsContainer.classList.remove("position-fixed");
    tabsContainer.classList.add("position-absolute");
    tabsContainer.style.bottom = "10vh";
    tabsContainer.style.right = `${-100 + rect.y}px`;
    tabsContainer.style.width = `${tabsContainer.scrollWidth}px`;
    console.log(tabsContainer.scrollWidth);
  } else {
    tabsContainer.classList.add("position-fixed");
    tabsContainer.classList.remove("position-absolute");
    tabsContainer.removeAttribute("style");
  }
});
