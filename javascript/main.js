var elem = document.querySelector('.carousel')

var flickityOptions = {
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    fullscreen: true,
    pageDots: false,
    draggable: true,
}

var flkty = new Flickity(elem, flickityOptions)

var scrollUpButtons = document.querySelectorAll('[data-scroll-up]')
var scrollDownButtons = document.querySelectorAll('[data-scroll-down]')
var container = document.querySelector('.container')

console.log('scrollUpButtons: ', scrollUpButtons)
console.log('scrollDownButtons: ', scrollDownButtons)

scrollUpButtons.forEach(button => {
    button.addEventListener('click', seeMore)
})

scrollDownButtons.forEach(button => {
    button.addEventListener('click', seeLess)
})

function seeMore() {
    scrollUp()
    disableSwipe()
}

function seeLess() {
    scrollDown()
    enableSwipe()
}

function scrollDown() {
    container.classList.remove('is-top')
}

function scrollUp() {
    container.classList.add('is-top')
}

function disableSwipe() {
    flkty.options.draggable = false
    flkty.updateDraggable()
}

function enableSwipe() {
    flkty.options.draggable = true
    flkty.updateDraggable()
}















