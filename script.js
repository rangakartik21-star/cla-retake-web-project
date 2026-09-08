const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');
const filters = [...document.querySelectorAll('.filter')];
const productCards = [...document.querySelectorAll('.product-card')];
const enquiryButtons = [...document.querySelectorAll('.inquiry-button')];
const productInterest = document.getElementById('productInterest');
const enquiryForm = document.getElementById('enquiryForm');
const enquiryModal = document.getElementById('enquiryModal');
const preparedMessage = document.getElementById('preparedMessage');
const copyMessage = document.getElementById('copyMessage');
const formStatus = document.getElementById('formStatus');

menuButton.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.toggle('active', item === button));
  const filter = button.dataset.filter;
  productCards.forEach(card => card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter));
}));

enquiryButtons.forEach(button => button.addEventListener('click', () => {
  productInterest.value = button.dataset.product;
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => document.getElementById('customerName').focus(), 500);
}));

function openModal(message) {
  preparedMessage.value = message;
  enquiryModal.classList.add('open');
  enquiryModal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  enquiryModal.classList.remove('open');
  enquiryModal.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('[data-close-modal]').forEach(element => element.addEventListener('click', closeModal));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModal(); });

enquiryForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('customerName').value.trim();
  const phone = document.getElementById('customerPhone').value.trim();
  const interest = productInterest.value;
  const details = document.getElementById('customerMessage').value.trim();
  if (!/^\d{10}$/.test(phone)) {
    formStatus.textContent = 'Please enter a valid 10-digit mobile number.';
    return;
  }
  formStatus.textContent = 'Enquiry prepared. Copy it and contact the store.';
  const message = `Hello Vimal Electronics,\n\nMy name is ${name}. I am interested in ${interest}.\n${details ? `Requirement: ${details}\n` : ''}My contact number is ${phone}.\n\nPlease let me know the current options, availability and price. Thank you.`;
  openModal(message);
});

copyMessage.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(preparedMessage.value);
    copyMessage.textContent = 'Copied';
    setTimeout(() => { copyMessage.textContent = 'Copy message'; }, 1400);
  } catch {
    preparedMessage.select();
    document.execCommand('copy');
  }
});
