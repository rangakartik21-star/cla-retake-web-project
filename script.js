const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const goalForm = document.getElementById('goalForm');
const goalInput = document.getElementById('goal');
const formMessage = document.getElementById('formMessage');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

goalForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const goal = goalInput.value.trim();

  if (goal.length < 3) {
    formMessage.textContent = 'Please enter a study goal of at least 3 characters.';
    goalInput.focus();
    return;
  }

  formMessage.textContent = `Goal saved: “${goal}”`;
  goalForm.reset();
});
