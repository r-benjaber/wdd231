let hamBtn = document.querySelector(".burger");
let navigation = document.querySelector(".navigation")

hamBtn.addEventListener("click", () => {
    navigation.classList.toggle("show");
    hamBtn.classList.toggle("show")
})