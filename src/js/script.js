// Destacar link ativo no menu
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
  if (link.href === window.location.href) {
    link.style.color = '#a855f7';
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

// =====================================================
// NAV DINÂMICO - mostra usuário logado / botões de auth
// =====================================================
function renderNavUsuario() {
  const nav = document.querySelector('nav ul');
  if (!nav) return;

  // Remover wrapper anterior se existir
  const antigo = document.querySelector('.user-badge');
  if (antigo) antigo.remove();

  const wrapper = document.createElement('div');
  wrapper.className = 'user-badge';
  const base = caminhoBase();

  if (typeof Auth !== 'undefined' && Auth.estaLogado()) {
    const user = Auth.usuarioAtual();
    const qt = (typeof Carrinho !== 'undefined') ? Carrinho.totalItens() : 0;
    wrapper.innerHTML = `
      <a href="${base}pages/carrinho.html" class="cart-icon" title="Meu carrinho">
        🛒<span class="badge" style="${qt === 0 ? 'display:none' : ''}">${qt}</span>
      </a>
      <a href="${base}pages/pedidos.html" class="user-info" style="text-decoration:none">
        Olá, <b>${user.nome.split(' ')[0]}</b>
      </a>
      <button class="btn-logout" onclick="Auth.logout()">Sair</button>
    `;
  } else {
    wrapper.innerHTML = `
      <a href="${base}pages/login.html" class="user-info" style="text-decoration:none;color:#b0b0bb">Login</a>
      <a href="${base}pages/cadastro.html" class="btn-logout" style="text-decoration:none">Cadastrar</a>
    `;
  }
  nav.parentNode.appendChild(wrapper);
}

// Roda quando todos os scripts estiverem disponíveis
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderNavUsuario);
} else {
  renderNavUsuario();
}
