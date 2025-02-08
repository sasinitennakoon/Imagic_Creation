document.addEventListener('DOMContentLoaded', () => {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    // Example: Dynamically add portfolio items
    const works = [
        { title: 'Project 1', image: 'images/project1.jpg' },
        { title: 'Project 2', image: 'images/project2.jpg' },
    ];

    works.forEach(work => {
        const div = document.createElement('div');
        div.className = 'portfolio-item';
        div.innerHTML = `
            <img src="${work.image}" alt="${work.title}" style="width: 100%;">
            <h3>${work.title}</h3>
        `;
        portfolioGrid.appendChild(div);
    });
});


document.addEventListener('scroll', () => {
    const homeSection = document.querySelector('#home');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        homeSection.style.animation = 'bgExpand 5s ease-in-out forwards';
    }
});


// Get all section elements and navbar links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

// Create an IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
      
      if (entry.isIntersecting) {
        // Remove active class from all links
        navLinks.forEach((link) => link.classList.remove('active'));
        // Add active class to the current link
        navLink.classList.add('active');
      }
    });
  },
  {
    threshold: 0.6, // Trigger when 60% of the section is in view
  }
);

// Observe all sections
sections.forEach((section) => observer.observe(section));


