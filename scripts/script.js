let navbar = document.querySelector('.nav-bar');
let openBtn = document.querySelector('.open-btn')
// let closeBtn = document.querySelector('.close-btn')

openBtn.addEventListener('click', () => {
    navbar.classList.toggle('toggle');
})

// closeBtn.addEventListener('click', () => {
//     navbar.classList.remove('toggle');
// })



// Theme toggle functionality
const toggleButton = document.getElementById('theme-toggle');
console.log(toggleButton);

const body = document.body;

// Apply saved theme
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    // Save theme preference
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        toggleButton.innerText = ' 🌙';
    } else {
        localStorage.setItem('theme', 'dark');
        toggleButton.innerText = '🌞';
    }
});

