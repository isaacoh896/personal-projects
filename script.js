/* ============================================
   SMOOTH SCROLL BEHAVIOR
   ============================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ============================================
   NAVBAR BACKGROUND ON SCROLL
   ============================================ */

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.12)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
});

/* ============================================
   SCROLL REVEAL ANIMATION
   ============================================ */

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and timeline items
document.querySelectorAll(
    '.project-card, .education-card, .involvement-card, .venture-card, .timeline-content'
).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

/* ============================================
   ACTIVE NAVIGATION LINK
   ============================================ */

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        link.style.borderBottom = '';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary-color)';
            link.style.borderBottom = '2px solid var(--primary-color)';
        }
    });
});

/* ============================================
   CONTACT LINKS
   ============================================ */

// Update these with your actual contact information
const contactInfo = {
    email: 'your.email@example.com',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/isaacoh896',
    twitter: 'https://twitter.com/yourhandle'
};

// You can use this data to dynamically populate contact links if needed

/* ============================================
   THEME TOGGLE (Optional: Light/Dark Mode)
   ============================================ */

// Uncomment below to add light/dark mode toggle functionality
/*
function initThemeToggle() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (prefersDark.matches) {
        document.documentElement.style.setProperty('--primary-color', '#ffffff');
        document.documentElement.style.setProperty('--secondary-color', '#1a1a1a');
        document.documentElement.style.setProperty('--accent-color', '#cccccc');
        document.documentElement.style.setProperty('--light-gray', '#2a2a2a');
        document.documentElement.style.setProperty('--border-color', '#333333');
    }
}

initThemeToggle();
*/

/* ============================================
   FORM HANDLING (If you add a contact form)
   ============================================ */

// Example form submission handler
/*
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
    });
}
*/

/* ============================================
   MOBILE MENU TOGGLE (If you add hamburger menu)
   ============================================ */

// Example mobile menu toggle
/*
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}
*/

console.log('Portfolio script loaded successfully!');
