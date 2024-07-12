function dropMenu() {
  const menuButton = document.querySelector(".menu-button");
  const menuDropdown = document.querySelector(".menu-dropdown");

  menuButton.addEventListener("click", () => {
    if (menuDropdown.style.display === "block") {
      menuDropdown.style.display = "none";
    } else {
      menuDropdown.style.display = "block";
    }
  });
}

export { dropMenu };
