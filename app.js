const navSlide = () => {
    const menu = document.querrySelector('.menu');
    const nav = document.querySelector('nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    menu.addEventListner('click', () => {
        nav.classList.toggle('nav-active');
    });

    navLinks.forEach(link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
    });
}

navSlide();