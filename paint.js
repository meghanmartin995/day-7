const canvas = document.querySelector("canvas")

canvas.width = window.innerWidth

canvas.height = window.innerHeight

const context = canvas.getContext("2d")

context.strokeStyle = "#ffffff;"
context.lineWidth = 8
context.lineCap = "round"

let shouldPaint = false

let hue = 0


document.addEventListener("mousedown", function(event) {
  shouldPaint = true
  context.moveTo(event.pageX, event.pageY)
  context.beginPath()
})

document.addEventListener("mouseup", function(event) {
  shouldPaint = false
})

document.addEventListener("mousemove", function(event) {
  if (shouldPaint) {
    context.lineTo(event.pageX, event.pageY)
    context.stroke()
  }
})

document.querySelectorAll("section a").forEach(link => {
  link.addEventListener("click", function(event) {
    context.strokeStyle = this.style.backgroundColor
  })
})

































