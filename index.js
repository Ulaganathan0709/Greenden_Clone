// Selecting Side Navbar, MenuIcon, and Close Button
let sidenav = document.getElementById("sidenav");
let menuicon = document.getElementById("menuicon");
let closenav = document.getElementById("classnav"); // Corrected this line

// Event listener to open the side navbar
menuicon.addEventListener("click", function() {
    sidenav.style.right = "0"; // Open side navbar by changing right value
});

// Event listener to close the side navbar
closenav.addEventListener("click", function() {
    sidenav.style.right = "-50%"; // Close side navbar by setting right value back
});
