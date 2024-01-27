//add a scroll event listener
window.addEventListener("scroll", function(){
    const backToTop = document.getElementById("back");
    if(window.scrollY > 200) {
        backToTop.className = "back-top show";
    } else {
        backToTop.className = "back-top hide";
    }
});

/*
const backToTop = document.getElementsById("back");

let scrollControlFunc = function() {
    var y = window.scrollY;

    if (y >= 100) {
        backToTop.className = "back-top show";
    } else {
        backToTop.className = "back-top hide";
    }
};
*/

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};