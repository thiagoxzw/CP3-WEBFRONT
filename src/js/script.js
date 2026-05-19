// Destacar link ativo no menu
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
  if (link.href === window.location.href) {
    link.style.color = '#00f0ff';
    link.style.fontWeight = '800';
  }
});

// Envio do formulário de contato
const form = document.querySelector('.form-contato');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = form.querySelector('input[name="nome"]').value;
    alert('GG ' + nome + '! Sua mensagem foi enviada. A equipe da N Store retornará em breve.');
    form.reset();
  });
}

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const alvo = document.querySelector(this.getAttribute('href'));
    if (alvo) {
      e.preventDefault();
      alvo.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animação de fade-in nos cards ao rolar a página
const cards = document.querySelectorAll('.card');
if (cards.length > 0 && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}
