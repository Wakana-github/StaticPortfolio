
console.log("js loaded");
// humburger menu
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("bl_hamburgerLine");
    const nav = document.getElementById("navbar");
  
    // click menu
    hamburger.addEventListener("click", function () {
      nav.classList.toggle("active"); 
      hamburger.classList.toggle("active");
    });
  
    // close menu
    document.querySelectorAll(".nav-list a").forEach(item => {
      item.addEventListener("click", function () {
        nav.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });
  });
