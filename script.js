const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');

if (toggle && header) {
  toggle.addEventListener('click', () => {
    const opened = header.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
  });
}

const page = document.body.dataset.page;
document.querySelectorAll('[data-page]').forEach(a => {
  if (a.dataset.page === page) a.classList.add('active');
});

document.querySelectorAll('[data-current-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});

const revealTargets = document.querySelectorAll('.concise-card, .focus-card, .service-card, .field-grid article, .value-grid article, .timeline article, .contact-cards article, .contact-guide');
revealTargets.forEach(el => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  revealTargets.forEach(el => io.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('in-view'));
}

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 18);
};
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });
