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

//Product Search Functionality
let productContainer = document.getElementById("product-container");
let search = document.getElementById("search");
let productlist = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function(event) {
    let enteredValue = event.target.value.toUpperCase();  // Capture the entered value in uppercase
    for (let count = 0; count < productlist.length; count++) {
        let productName = productlist[count].querySelector("h1").textContent; // Get the product name
        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none";  // Hide product if it doesn't match search
        } else {
            productlist[count].style.display = "block"; // Show product if it matches search
        }
    }
});

