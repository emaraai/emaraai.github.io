const animatedTags = document.querySelectorAll("nav, div.row, div.downScroll a, section.columnRow")

animatedTags.forEach(tag => {
  tag.style.opacity = 0
})

const fadeIn = function () {
  
  let delay = 0.25
  
  animatedTags.forEach(tag => {
    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom
    
    if (tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = `fadein 1s ${delay}s both`
      delay = delay + 0.50
    } else {
      tag.style.opacity = 0
      tag.style.animation = ""
    }
  })
}


window.addEventListener("load", function(){
    fadeIn()
});
