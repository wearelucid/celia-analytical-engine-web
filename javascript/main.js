var elem = document.querySelector('.carousel');
var flickityOptionen = {
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    pageDots: false,
}
var flkty = new Flickity(elem, flickityOptionen);

var scrollUpButtons = document.querySelectorAll('.button-see-more');
var scrollDownButtons = document.querySelectorAll('.button-down');

scrollUpButtons.forEach(button => {
    button.addEventListener('click', seeMore)
})

scrollDownButtons.forEach(button => {
    button.addEventListener('click', seeLess)
})

function seeMore() {
    console.log('hallo')
    var container = document.querySelector('.container')
    container.classList.add("is-top")
}

function seeLess() {
    console.log('tschau')
    var container = document.querySelector('.container')
    container.classList.remove("is-top")
}














