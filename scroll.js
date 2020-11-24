const upSectionTag = document.querySelector("section.up")
const downSectionTag = document.querySelector("section.down")

const downTag = document.querySelector("div.downScroll")
const upTag = document.querySelector("div.upScroll")

const bodyTag = document.querySelector("body")

downTag.addEventListener("click", function () {
    
  bodyTag.classList.add("downSection-open")
    
  bodyTag.classList.add("upSection-close")
    
     
})

upTag.addEventListener("click", function () {
    
  bodyTag.classList.remove("downSection-open")

  bodyTag.classList.remove("upSection-close")
    
     
})

