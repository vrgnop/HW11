const arr = ['IMG_6549.jpg','IMG_6550.jpg','IMG_6552.jpg']
let i = 0
const buttonRight = document.getElementById('right-arrow')
const buttonLeft = document.getElementById('left-arrow')
const gallery = document.getElementById('slider-gallery')
function sliderLeft () {
    if (i < arr.length - 1) {
        i++
    } else i = 0
    return gallery.style.backgroundImage = `url("./img/${arr[i]}")`
}

buttonRight.onclick = sliderLeft
function sliderRight () {
    if (i > 0) {
        i--
    } else i = arr.length - 1
    return gallery.style.backgroundImage = `url("./img/${arr[i]}")`
}

buttonLeft.onclick = sliderRight
//
// gallery.onload = createdDiv
// function createdDiv () {
//     const arrDiv = []
//     for (let y = 0; y < arr.length; y++) {
//         arrDiv.push(document.createElement('div'))
//         document.body.insertBefore(arrDiv[y], buttonLeft)
//     }
// }



