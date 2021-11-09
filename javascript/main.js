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

scrollUpButtons.forEach((button) => {
  button.addEventListener('click', seeMore)
})

scrollDownButtons.forEach((button) => {
  button.addEventListener('click', seeLess)
})

function seeMore() {
  scrollUp()
  disableSwipe()
}

function seeLess(event) {
  scrollDown()
  enableSwipe()
  stopNearestVideo(event.target)
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

// Stopping Vimeo Video when returning to slide content
// https://gist.github.com/cferdinandi/9044694
function stopNearestVideo(element) {
  const videoDiv = element.closest('.video')
  if (videoDiv) {
    const iframe = videoDiv.querySelector('iframe')
    const video = iframe.querySelector('video')
    if (iframe) {
      const iframeSrc = iframe.src
      iframe.src = iframeSrc
    }
    if (video) {
      video.pause()
    }
  }
}
