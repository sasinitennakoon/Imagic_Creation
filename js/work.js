let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop === 0) {
        // User is at the top of the page
        navbar.style.transform = 'translateY(0)';
        navbar.style.opacity = '1';
    } else if (scrollTop > lastScrollTop) {
        // User is scrolling down
        navbar.classList.add('hidden');
    } else {
        // User is scrolling up
        navbar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
});

document.querySelectorAll('.project-card img').forEach(img => {
    img.onload = function () {
        const card = img.parentElement;
        if (img.naturalWidth > img.naturalHeight) {
            card.classList.add('horizontal');
        }
    };
});
