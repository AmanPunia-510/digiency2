$('.slick-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpped: 4000,
    arrows: false,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 4,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpped: 3000
            }
        }
    ]
});


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// brightness svg
let body = document.querySelector("body")
let bright = document.querySelector(".brightness-svg");
let sec1 = document.querySelector(".section1");
let navabar = document.querySelector(".nav");
let log = document.querySelector(".logo");
let li = document.querySelector(".list");
let h1 = document.querySelector(".heading1");
let p1 = document.querySelector(".paragraph1");
let sec3 = document.querySelector(".section3");
let sec6 = document.querySelector(".section6");
let foot = document.querySelector(".footer");
let box = document.querySelector(".box-1");


bright.addEventListener("click", function () {
    if (body.style.backgroundColor == "white") {
        body.style.backgroundColor = "black"
        sec3.style.backgroundColor = "black"
        sec1.style.backgroundColor = "black"
        sec6.style.backgroundColor = "black"
        foot.style.backgroundColor = "black"
        navabar.style.backgroundColor = "black"
    }
    else {
        body.style.backgroundColor = "white"
        sec3.style.backgroundColor = "#FFF7F4"
        sec1.style.backgroundColor = "#FFF7F4"
        sec1.style.backgroundColor = "#fff7f4"
        foot.style.backgroundColor = "#373737"
        navabar.style.backgroundColor = "white"

    }
})
