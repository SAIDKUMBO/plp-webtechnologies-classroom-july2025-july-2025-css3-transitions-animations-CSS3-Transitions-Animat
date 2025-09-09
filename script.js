let modal = document.getElementById("modal");
let modalContent = document.querySelector(".modal-content");
let openBtn = document.getElementById("openModalBtn");
let closeBtn = document.getElementById("closeModalBtn");
let staggerItems = document.querySelectorAll(".stagger");

// Function to open modal
function openModal() {
  modal.style.display = "flex";
  modalContent.style.animation = "slideFadeIn 0.6s ease forwards";

  // Apply staggered animation delays
  staggerItems.forEach((el, i) => {
    el.style.animationDelay = `${0.3 + i * 0.2}s`;
  });
}

// Function to close modal
function closeModal() {
  modalContent.style.animation = "fadeOut 0.5s ease forwards";
  setTimeout(() => {
    modal.style.display = "none";
    staggerItems.forEach(el => el.style.animation = "none"); // reset
  }, 500);
}

// Demo function with scope + return
function alertUser(message) {
  alert(message);
  return "Message shown: " + message;
}

// Event Listeners
openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
