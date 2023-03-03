// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     })
// })
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("navLogo").style.filter = "invert(100%) hue-rotate(180deg) brightness(10)";
        document.getElementById("navigation-header").style.backgroundColor = "#2971bf";
        document.getElementById("navLogo").style.transition = "0.5s";
    } else {
        document.getElementById("navigation-header").style.backgroundColor = "#c4ffff";
        document.getElementById("navLogo").style.filter = "";
    }
}

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el))