var elem = document.querySelector('.carousel');

var flickityOptionen = {
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    pageDots: false,
}

var flkty = new Flickity(elem, flickityOptionen);

function seeMore() {
    console.log('hallo')
    var container = document.querySelector('.container')
    container.classList.add("scroll-up")
}
function seeLess() {
    console.log('tschau')
    var container = document.querySelector('.container')
    container.classList.remove("scroll-up")
}








