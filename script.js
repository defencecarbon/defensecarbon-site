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
document.querySelectorAll('[data-current-year]').forEach(el => el.textContent = new Date().getFullYear());
