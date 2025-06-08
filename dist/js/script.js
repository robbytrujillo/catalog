const hamburger = document.querySelector(".ri-menu-3-line");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
});

window.onscroll = () => {
    menu.classList.remove("menu-active");
}

const btnFilter = document.querySelectorAll(".product-box ul li");

btnFilter.forEach((data) => {
  // Button Active
    data.onclick = () => {
        btnFilter.forEach((data) => {
            data.className = "";
        });
        data.className = "active";
        }
})