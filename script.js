// script.js base para a Land Page Digimon
// Feito para ser simples e fácil de editar depois

// ============================
// 1. Menu Mobile (abre/fecha)
// ============================
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// ============================
// 2. Rolagem suave entre seções
// ============================
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    if (link.hash) {
      e.preventDefault();
      const target = document.querySelector(link.hash);
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ============================
// 3. Botões de Comprar → Login
// ============================
const buyButtons = document.querySelectorAll('.btn-comprar');

buyButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = '../login/login.html';
  });
});

// ============================
// 4. Animações simples ao rolar a página
// ============================
function revealOnScroll() {
  const elements = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ============================
// 5. Formulário de Contato (alerta básico)
// ============================
const contatoForm = document.getElementById('contato-form');

if (contatoForm) {
  contatoForm.addEventListener('submit', e => {
    e.preventDefault();
    alert("Mensagem enviada! Em breve responderemos.");
    contatoForm.reset();
  });
}
