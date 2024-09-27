//for sticky nav bar

// window.onscroll = function() {myFunction()};
// var navbar = document.querySelector(".nav-wrapper");
// var sticky = navbar.offsetTop;
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("about-me-text");
    const textContent = textElement.textContent;
    textElement.textContent = "";  // Clear the text initially
    textElement.style.visibility = "visible";

    let i = 0;
    const speed = 10;  // Adjust speed in milliseconds

    function typeWriter() {
        if (i < textContent.length) {
            textElement.textContent += textContent.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();  // Start the typing effect
});
