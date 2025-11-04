let hamBtn = document.querySelector(".hamburger");
let navigation = document.querySelector(".navigation")

hamBtn.addEventListener("click", () => {
    navigation.classList.toggle("show");
    hamBtn.classList.toggle("show")
})