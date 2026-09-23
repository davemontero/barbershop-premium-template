import { initNavbar } from './modules/navbar.js';
import { initTestimonials } from './modules/testimonials.js';


initTestimonials();
initNavbar();

// Demo actions stay in place until a booking destination is configured.
document.addEventListener('click', (event) => {
  if (event.target.closest('a[href="#"]')) event.preventDefault();
});
