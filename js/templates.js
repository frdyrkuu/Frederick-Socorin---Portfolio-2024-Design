// Function to load the external HTML file
function loadHTML(file, element) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.querySelector(element).innerHTML = data;
    })
    .catch((error) => console.log("Error loading HTML:", error));
}

// Load the swiper slide HTML
document.addEventListener("DOMContentLoaded", () => {
  loadHTML("../templates/swiper-card.html", "#swiper-container");
});
