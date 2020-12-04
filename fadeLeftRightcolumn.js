const leftColumn = document.querySelector("section.down div.left")
const rightColumn = document.querySelector("section.down div.right")

leftColumn.addEventListener("click", function () {
    bodyTag.classList.toggle("leftColumn-open")
    bodyTag.classList.remove("rightColumn-open")
})

rightColumn.addEventListener("click", function () {
    bodyTag.classList.toggle("rightColumn-open")
    bodyTag.classList.remove("leftColumn-open")
})
