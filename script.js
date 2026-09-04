document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav-links');
  if (button && nav) button.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    button.setAttribute('aria-expanded', open);
  });
  const year = document.querySelector('#current-year');
  if (year) year.textContent = new Date().getFullYear();
});
