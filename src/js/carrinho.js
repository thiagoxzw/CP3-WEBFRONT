// ====================================
// CARRINHO + PEDIDOS
// localStorage keys:
//   nstore_carrinho_<email>  -> array de { id, nome, marca, preco, img, quantidade }
//   nstore_pedidos_<email>   -> array de { numero, data, itens, total, status }
// ====================================

const Carrinho = {
  chave() {
    const user = Auth.usuarioAtual();
    return user ? 'nstore_carrinho_' + user.email : 'nstore_carrinho_anon';
  },

  obter() {
    return JSON.parse(localStorage.getItem(this.chave()) || '[]');
  },

  salvar(itens) {
    localStorage.setItem(this.chave(), JSON.stringify(itens));
    atualizarBadgeCarrinho();
  },

  adicionar(produto) {
    if (!Auth.estaLogado()) {
      alert('Faça login para adicionar produtos ao carrinho.');
      location.href = caminhoBase() + 'pages/login.html';
      return;
    }
    const itens = this.obter();
    const existente = itens.find(i => i.id === produto.id);
    if (existente) {
      existente.quantidade += 1;
    } else {
      itens.push({ ...produto, quantidade: 1 });
    }
    this.salvar(itens);
    mostrarToast(produto.nome + ' adicionado ao carrinho!');
  },

  alterarQuantidade(id, delta) {
    const itens = this.obter();
    const item = itens.find(i => i.id === id);
    if (!item) return;
    item.quantidade += delta;
    if (item.quantidade <= 0) {
      this.remover(id);
      return;
    }
    this.salvar(itens);
    renderCarrinho();
  },

  remover(id) {
    const itens = this.obter().filter(i => i.id !== id);
    this.salvar(itens);
    renderCarrinho();
  },

  total() {
    return this.obter().reduce((s, i) => s + i.preco * i.quantidade, 0);
  },

  totalItens() {
    return this.obter().reduce((s, i) => s + i.quantidade, 0);
  },

  limpar() {
    this.salvar([]);
  }
};

const Pedidos = {
  chave() {
    const user = Auth.usuarioAtual();
    return user ? 'nstore_pedidos_' + user.email : null;
  },

  obter() {
    const k = this.chave();
    return k ? JSON.parse(localStorage.getItem(k) || '[]') : [];
  },

  criar() {
    const itens = Carrinho.obter();
    if (itens.length === 0) {
      alert('Seu carrinho está vazio.');
      return;
    }
    const pedidos = this.obter();
    const numero = 'NS' + Date.now().toString().slice(-8);
    const novo = {
      numero,
      data: new Date().toLocaleDateString('pt-BR'),
      itens: itens.map(i => ({ nome: i.nome, quantidade: i.quantidade, preco: i.preco })),
      total: Carrinho.total(),
      status: 'Confirmado'
    };
    pedidos.unshift(novo);
    localStorage.setItem(this.chave(), JSON.stringify(pedidos));
    Carrinho.limpar();
    alert('Pedido ' + numero + ' realizado com sucesso! GG ' + Auth.usuarioAtual().nome + '!');
    location.href = caminhoBase() + 'pages/pedidos.html';
  }
};

function formatarBRL(valor) {
  return 'R$ ' + valor.toFixed(2).replace('.', ',');
}

function mostrarToast(msg) {
  let toast = document.getElementById('nstore-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'nstore-toast';
    toast.style.cssText = 'position:fixed;bottom:30px;right:30px;background:linear-gradient(135deg,#a855f7,#00ff88);color:#0e0e14;padding:14px 22px;border-radius:6px;font-weight:800;box-shadow:0 8px 30px rgba(0,255,136,0.3);z-index:9999;opacity:0;transition:opacity 0.3s;letter-spacing:1px';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  setTimeout(() => { toast.style.opacity = '0'; }, 2200);
}

function atualizarBadgeCarrinho() {
  const badge = document.querySelector('.cart-icon .badge');
  if (badge) {
    const qt = Carrinho.totalItens();
    badge.textContent = qt;
    badge.style.display = qt > 0 ? 'block' : 'none';
  }
}
