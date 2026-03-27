
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const toggle = document.querySelector(".nav-toggle");
  const page = document.body.dataset.page;
  const yearTarget = document.querySelector("[data-current-year]");
  const contactForm = document.querySelector("#contact-form");
  if (toggle && header) {
    toggle.addEventListener("click", () => {
      const open = header.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }
  if (page) {
    document.querySelectorAll('.menu a[data-page]').forEach(link => {
      if (link.dataset.page === page) link.classList.add('active');
    });
  }
  if (yearTarget) yearTarget.textContent = new Date().getFullYear();
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const subject = `[디펜스카본 문의] ${formData.get('company') || '기관명 미기재'} / ${formData.get('service') || '상담'}`;
      const body = [
        '안녕하세요. 아래 내용으로 시험/기술 상담 문의드립니다.',
        '',
        `이름: ${formData.get('name') || '미기재'}`,
        `소속: ${formData.get('company') || '미기재'}`,
        `이메일: ${formData.get('email') || '미기재'}`,
        `연락처: ${formData.get('phone') || '미기재'}`,
        `희망 서비스: ${formData.get('service') || '미기재'}`,
        '',
        '문의 내용:',
        `${formData.get('message') || '내용 미기재'}`
      ].join('
');
      window.location.href = `mailto:shin955@hanbat.ac.kr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
});
