var elem = document.querySelector('.carousel');

var scrollUpButtons = document.querySelectorAll('.button-see-more');

// Add eventlistener for all buttons
// scrollUpButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         console.log('Hoi Oli');
//     })
// })

scrollUpButtons.forEach(button => {
    button.addEventListener('click', seeMore)
})

// select all back to engine buttons, compare: see more buttons

// add eventlistener for all back to engine buttons to listen for clicks
// pass seeLess function to remove is ´is-top´ class


console.log('scrollUpButtons: ', scrollUpButtons);

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
    container.classList.add("is-top")
}

function seeLess() {
    console.log('tschau')
    var container = document.querySelector('.container')
    container.classList.remove("is-top")
}








