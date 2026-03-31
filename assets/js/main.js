// Header scroll effect
const header = document.getElementById('header');
const onScroll = () => {
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

// Mobile dropdown toggles
document.querySelectorAll('.has-dropdown > a').forEach(link => {
  link.addEventListener('click', e => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      link.parentElement.classList.toggle('open');
    }
  });
});

// Close nav when a link is clicked
document.querySelectorAll('#mainNav a:not(.has-dropdown > a)').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
  });
});

// Contact form (inner page) — simple mailto fallback
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = contactForm.querySelector('[name="nombre"]').value;
    const email = contactForm.querySelector('[name="email"]').value;
    const phone = contactForm.querySelector('[name="telefono"]').value;
    const message = contactForm.querySelector('[name="mensaje"]').value;
    const subject = encodeURIComponent(`Consulta de ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\n\nMensaje:\n${message}`);
    window.location.href = `mailto:info@b2bx.cl?subject=${subject}&body=${body}`;
  });
}
