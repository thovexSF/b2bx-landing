/* =============================================
   B2B Express – main.js
   ============================================= */

(function () {
  'use strict';

  /* -----------------------------------------------
     HEADER: scroll shrink
  ----------------------------------------------- */
  const header = document.getElementById('header');
  function updateHeader() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  /* -----------------------------------------------
     BACK TO TOP
  ----------------------------------------------- */
  const btt = document.getElementById('back-to-top');
  if (btt) {
    window.addEventListener('scroll', function () {
      btt.classList.toggle('show', window.scrollY > 400);
    }, { passive: true });
    btt.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* -----------------------------------------------
     MOBILE NAV TOGGLE
  ----------------------------------------------- */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      mainNav.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
      if (header && !header.contains(e.target)) {
        mainNav.classList.remove('open');
      }
    });
  }

  /* -----------------------------------------------
     DROPDOWN TOGGLE ON MOBILE
  ----------------------------------------------- */
  document.querySelectorAll('.has-dropdown > a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
  });

  /* Close nav on link click (non-dropdown) */
  document.querySelectorAll('#mainNav a:not(.has-dropdown > a)').forEach(function (link) {
    link.addEventListener('click', function () {
      if (mainNav) mainNav.classList.remove('open');
    });
  });

  /* -----------------------------------------------
     HERO TYPED ANIMATION
  ----------------------------------------------- */
  const typedEl = document.getElementById('heroTyped');
  if (typedEl) {
    const words = ['B2B', 'EXPRESS'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 120;

    function type() {
      const word = words[wordIndex];
      if (isDeleting) {
        typedEl.textContent = word.substring(0, charIndex - 1);
        charIndex--;
        delay = 70;
      } else {
        typedEl.textContent = word.substring(0, charIndex + 1);
        charIndex++;
        delay = 130;
      }
      if (!isDeleting && charIndex === word.length) {
        delay = 1800;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400;
      }
      setTimeout(type, delay);
    }
    setTimeout(type, 900);
  }

  /* -----------------------------------------------
     TESTIMONIAL SLIDER
  ----------------------------------------------- */
  const testiItems = document.querySelectorAll('.testi-item');
  const dots       = document.querySelectorAll('.dot');
  if (testiItems.length > 1) {
    let current = 0;
    function showSlide(i) {
      testiItems.forEach(function (el, idx) { el.classList.toggle('active', idx === i); });
      dots.forEach(function (d, idx) { d.classList.toggle('active', idx === i); });
      current = i;
    }
    let autoplay = setInterval(function () {
      showSlide((current + 1) % testiItems.length);
    }, 5000);
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        clearInterval(autoplay);
        showSlide(parseInt(this.dataset.index, 10));
        autoplay = setInterval(function () {
          showSlide((current + 1) % testiItems.length);
        }, 5000);
      });
    });
  }

  /* -----------------------------------------------
     CONTACT FORM (inner pages)
  ----------------------------------------------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name    = (contactForm.querySelector('[name="nombre"]') || {}).value || '';
      const email   = (contactForm.querySelector('[name="email"]') || {}).value || '';
      const phone   = (contactForm.querySelector('[name="telefono"]') || {}).value || '';
      const message = (contactForm.querySelector('[name="mensaje"]') || {}).value || '';
      const subject = encodeURIComponent('Consulta de ' + name);
      const body    = encodeURIComponent('Nombre: ' + name + '\nEmail: ' + email + '\nTeléfono: ' + phone + '\n\nMensaje:\n' + message);
      window.location.href = 'mailto:info@b2bx.cl?subject=' + subject + '&body=' + body;
    });
  }

})();
