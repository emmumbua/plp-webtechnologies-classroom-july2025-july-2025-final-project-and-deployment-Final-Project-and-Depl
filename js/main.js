// ===== Mobile Menu Toggle =====
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// ===== Modal for Cards =====
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.dataset.modal;
    document.getElementById(modalId).classList.add('active');
  });
});
document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').classList.remove('active');
  });
});

// ===== Simple Form Validation =====
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', e => {
    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    if (!name.value.trim() || !email.value.trim()) {
      e.preventDefault();
      alert('Please fill in all required fields.');
    }
  });
}
