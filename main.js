
const navbar = document.getElementById("nav-fixed");


const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove the sticky class when you leave the scroll position.
function myFunction() {
  if (window.pageYOffset  >= sticky) {
    navbar.classList.add("nav-sticky")
  } else {
    navbar.classList.remove("nav-sticky");
  }
}

document.getElementById("switchButton").onclick = function () {
  
};