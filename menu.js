const parentLink = document.querySelector('nav li');
const submenu = document.querySelector('.submenu');

parentLink.addEventListener('mouseenter', () => {
    submenu.style.display = 'block';
});

submenu.addEventListener('mouseleave', () => {
    submenu.style.display = 'none';
});