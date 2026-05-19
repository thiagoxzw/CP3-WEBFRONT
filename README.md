# N Store — Loja Gamer

Site dinâmico e responsivo da **N Store** (Nexus Store), e-commerce de periféricos gamer high-end com sistema completo de **cadastro, login, carrinho e pedidos**.

## Tema
Loja Gamer — Periféricos high-end (Razer, Logitech G, HyperX)

## Estrutura

```
.
├── index.html
├── pages/
│   ├── portifolio.html      (catálogo + setups promocionais)
│   ├── sobre.html
│   ├── contato.html
│   ├── login.html           (NOVO)
│   ├── cadastro.html        (NOVO)
│   ├── carrinho.html        (NOVO - protegida)
│   └── pedidos.html         (NOVO - protegida)
└── src/
    ├── assets/
    │   ├── img/logo.png
    │   └── pdf/
    ├── css/estilo.css
    └── js/
        ├── script.js        (geral + nav dinâmico)
        ├── auth.js          (cadastro/login/logout)
        ├── carrinho.js      (carrinho + pedidos)
        └── produtos.js      (catálogo)
```

## Funcionalidades

### 🛒 E-commerce
- **Catálogo dinâmico** com 8 produtos reais (Razer Viper V3 Pro, Logitech G Pro X Superlight 2, Razer Huntsman, HyperX Cloud III, etc.)
- Fotos diretas das CDNs das marcas com fallback automático
- **Botão "Adicionar ao Carrinho"** em cada produto
- **Carrinho persistente** por usuário (localStorage)
- Controle de quantidade, remoção de itens
- Cálculo de frete (grátis acima de R$ 299)
- **Finalização de pedido** com número gerado

### 👤 Autenticação
- Cadastro de usuário (nome, e-mail, senha)
- Login com validação
- **Nav dinâmico**: mostra nome do usuário + ícone do carrinho com badge
- Logout
- **Páginas protegidas**: Carrinho e Pedidos exigem login

### 📦 Pedidos
- Histórico completo de pedidos por usuário
- Número do pedido, data, itens, total e status
- Persistência via localStorage

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis, Flexbox, Grid, animações, responsividade)
- JavaScript vanilla (módulos Auth, Carrinho, Pedidos)
- localStorage para persistência

## Identidade Visual

- **Logo:** criado no Canva
- **Paleta:** roxo neon `#a855f7`, verde elétrico `#00ff88`, fundo preto `#0e0e14`, dourado para destaques
- **Tipografia:** sans-serif moderno
- **Estilo:** cyberpunk gamer, dark com glow neon

## Como Executar

Abra `index.html` no navegador, ou hospede via GitHub Pages.

## Como Testar o E-commerce

1. Acesse a página de **Cadastro** e crie uma conta
2. Vá em **Portifólio** e clique em "Adicionar ao Carrinho" em vários produtos
3. Acesse o **Carrinho** (ícone 🛒 no nav) para ajustar quantidades
4. Clique em **Finalizar Compra**
5. Veja seu pedido em **Meus Pedidos** (clicando no seu nome no nav)
