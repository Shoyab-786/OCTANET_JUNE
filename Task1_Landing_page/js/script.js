const headerContainer = document.querySelector('.header_container');
document.addEventListener("DOMContentLoaded", () => {
    headerContainer.classList.add('show_header');
});

// Toggle Navbar
const navRight = document.querySelector('.navRight');
const toggleBar = document.querySelector('.toggleBar');
const navHeight = document.querySelector('.navHeight')

toggleBar.addEventListener('click', () => {
    navRight.classList.toggle('toggleNav');
    navHeight.classList.toggle('addHeight')

})