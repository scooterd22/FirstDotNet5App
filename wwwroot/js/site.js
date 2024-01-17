// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


function hidewords() {
    var words = document.getElementById("animation");
    if (words.style.display === "none") {
        words.style.display = "block";
    } else {
        words.style.display = "none";
    }
} setInterval(hidewords, 500);
