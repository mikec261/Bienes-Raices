document.addEventListener('DOMContentLoaded', function () {
    eventListeners();
});


function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);
}


function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion');

    /* VERSION LARGA
    if (navegacion.classList.contains('mostrar')) {
        navegacion.classList.remove('mostrar');
    } else {
        navegacion.classList.add('mostrar');
    }
    */

    navegacion.classList.toggle('mostrar');
}