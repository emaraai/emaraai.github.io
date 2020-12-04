// pick all of the images and layer them based on the z-index
const slideArea = document.querySelector("div.slides")
const images = slideArea.querySelectorAll("img")
const arrowRight = slideArea.querySelector("svg")

// we want to keep track of two things
let currentSlide = 0
let z = 1

// when i click the slide area, change the slide based on z-index
slideArea.addEventListener("click", function () {
    currentSlide = currentSlide + 1
    

    if (currentSlide > images.length - 1) {
        currentSlide = 0
    }

    z = z + 1

    // pick the right image
    images[currentSlide].style.zIndex = z
    images[currentSlide].style.cursor = "url(Rarrow.cur), auto"
})

function showSlides() {
    setInterval(function () {
        currentSlide = currentSlide + 1
        previousSlide = currentSlide - 1

        if (currentSlide > images.length - 1) {
            currentSlide = 0
        }
        
        z = z + 1
        
        images[currentSlide].style.zIndex = z
        
    }, 2500)
}


window.addEventListener("load", function () {
    showSlides()
});
