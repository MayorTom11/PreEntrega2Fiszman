const hamburguesa = document.querySelector('.header .nav_bar .hamburguesa');
const menu_mobile = document.querySelector('.header .nav_bar ul');

hamburguesa.addEventListener('click', () => {
    hamburguesa.classList.toggle('active');
    menu_mobile.classList.toggle('active');
});