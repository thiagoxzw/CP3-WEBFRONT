// ====================================
// AUTH - login, cadastro e usuário logado
// localStorage keys:
//   nstore_users    -> array de { email, nome, senha }
//   nstore_logado   -> email do usuário logado
// ====================================

const Auth = {
  getUsers() {
    return JSON.parse(localStorage.getItem('nstore_users') || '[]');
  },

  saveUsers(users) {
    localStorage.setItem('nstore_users', JSON.stringify(users));
  },

  cadastrar(nome, email, senha) {
    const users = this.getUsers();
    if (users.find(u => u.email === email)) {
      return { ok: false, msg: 'E-mail já cadastrado.' };
    }
    users.push({ nome, email, senha });
    this.saveUsers(users);
    localStorage.setItem('nstore_logado', email);
    return { ok: true, msg: 'Conta criada com sucesso!' };
  },

  login(email, senha) {
    const user = this.getUsers().find(u => u.email === email && u.senha === senha);
    if (!user) {
      return { ok: false, msg: 'E-mail ou senha incorretos.' };
    }
    localStorage.setItem('nstore_logado', email);
    return { ok: true, msg: 'Login realizado!' };
  },

  logout() {
    localStorage.removeItem('nstore_logado');
    location.href = caminhoBase() + 'index.html';
  },

  usuarioAtual() {
    const email = localStorage.getItem('nstore_logado');
    if (!email) return null;
    return this.getUsers().find(u => u.email === email) || null;
  },

  estaLogado() {
    return !!localStorage.getItem('nstore_logado');
  }
};

// Calcula caminho base (../ se estiver em pages/)
function caminhoBase() {
  return location.pathname.includes('/pages/') ? '../' : '';
}

// Exige login ou redireciona para login
function exigirLogin() {
  if (!Auth.estaLogado()) {
    alert('Você precisa estar logado para acessar essa página.');
    location.href = caminhoBase() + 'pages/login.html';
  }
}
