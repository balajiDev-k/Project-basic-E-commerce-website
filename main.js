const bar = document.querySelector(".mobile .bar"); // Select the bar icon inside the mobile div
const closeButton = document.querySelector(".navbar .close");
const navbar = document.querySelector(".navbar"); // Select the navbar element

// Add event listener to the bar icon
bar.addEventListener("click", function() {
    // Toggle the visibility of the navbar
    navbar.classList.add("active");
});
closeButton.addEventListener("click", function() {
    navbar.classList.remove("active"); // Remove 'active' class to hide the navbar
});