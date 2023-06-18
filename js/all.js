// Get the button:
let topbutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topbutton.style.display = "block";
    } else {
        topbutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
topbutton.addEventListener('click', function topFunction() {
    document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; (原寫法) // For Chrome, Firefox, IE and Opera
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const navBurger = document.querySelector('#navBurger');
const navList = document.querySelector('#navList');

navBurger.addEventListener('click', function () {
    navList.classList.toggle('-ulOn');

})