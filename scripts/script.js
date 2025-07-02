let navbar = document.querySelector('.nav-bar');
let openBtn = document.querySelector('.open-btn')
let closeBtn = document.querySelector('.close-btn')

openBtn.addEventListener('click', () => {
    navbar.classList.toggle('toggle');
})

closeBtn.addEventListener('click', () => {
    navbar.classList.remove('toggle');
})

