const joinBtn = document.querySelector("#join");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#closeModal");
 
joinBtn.addEventListener("click", () => {
    modal.showModal();
});

closeModal.addEventListener("click", () => {
    modal.close();
});
