const div = document.querySelector('.div')

div.ondrugstart = () => false

function getCoords(element) {
    const box = element.getBoundingClientRect()
    return {
        top: box.top + scrollY,
        left: box.left + scrollX
    }
}

div.addEventListener('mousedown', (e) => {
    e.preventDefault()
    const coords = getCoords(div)
    const shiftX = e.pageX - coords.left
    const shiftY = e.pageY - coords.top
console.log(coords.left)
    const moveAt = (e) => {
        div.style.left = e.pageX - shiftX + 'px'
        div.style.top = e.pageY - shiftY + 'px'
        console.log(div.style.left)
        console.log(e.pageY)
        console.log(shiftY)
    }
    const theEnd = () => {
        document.removeEventListener('mousemove', moveAt)
        document.removeEventListener('mouseup', theEnd)
    }
    div.style.position = 'absolute'
    moveAt(e)
    div.style.zIndex = '100'
    document.addEventListener('mousemove', moveAt)
    document.addEventListener('mouseup', theEnd)
})


