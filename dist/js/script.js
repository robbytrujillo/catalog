const hamburger = document.querySelector(".ri-menu-3-line");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
});

window.onscroll = () => {
    menu.classList.remove("menu-active");
}

const btnFilter = document.querySelectorAll(".product-box ul li");
const imgItem = document.querySelectorAll(".product-list img");

btnFilter.forEach((data) => {
  // Button Active
    data.onclick = () => {
        btnFilter.forEach((data) => {
            data.className = "";
        });

        data.className = "active";

        // Filter Image
        const btnText = data.textContent;
        imgItem.forEach((img) => {
            img.style.display = "none";
            if (img.getAttribute("data-filter") == btnText.toLowerCase() || btnText == "All Product") {
                img.style.display = "block";
            }
        })
        }
})