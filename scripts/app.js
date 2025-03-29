// Variable Declarations
const sidebarEl = document.querySelector(".sidebar");

// Handle Navigation Active Link
const linkEls = document.querySelectorAll(".nav-link");
linkEls.forEach((link) => {
  link.addEventListener("click", () => {
    // Remove ".nav-link--active" class from previously selected link
    const currentActiveLink = document.querySelector(".nav-link--active");
    if (currentActiveLink)
      currentActiveLink.classList.remove("nav-link--active");

    // Add ".nav-link--active" to the clicked link
    link.classList.add("nav-link--active");

    // Hide Sidebar menu after user click link --- crucial for mobile users
    sidebarEl.style.display = "none";
  });
});

// Handle Show/Hide Sidebar Menu
// >>> Show Sidebar Menu
const showSidebarMenuBtn = document.getElementById("sidebar-menu-btn--show");
showSidebarMenuBtn.addEventListener("click", () => {
  sidebarEl.style.display = "flex";
});

// >> Hide Sidebar Menu
const hideSidebarMenuBtn = document.getElementById("sidebar-menu-btn--hide");
hideSidebarMenuBtn.addEventListener("click", () => {
  sidebarEl.style.display = "none";
});
