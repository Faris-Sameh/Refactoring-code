// scroll detecting function 
window.onscroll = function() {
    const backToTopButton = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 0) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};
// when the button is clicked scrolls to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
