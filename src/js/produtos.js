
// Detecta caminho base (se está em /pages/ ou na raiz)
const BASE_IMG = (location.pathname.includes('/pages/') ? '../' : '') + 'src/assets/img/produtos/';

const PRODUTOS = [
  {
    id: 'razer-viper-v3-pro',
    nome: 'Razer Viper V3 Pro',
    marca: 'Razer',
    descricao: 'Mouse gamer wireless de elite, sensor Focus Pro 35K, 54g ultraleve, switches ópticos Gen-3.',
    preco: 1999.90,
    tag: 'MAIS VENDIDO',
    img: BASE_IMG + 'mouse-viper.jpg'
  },
  {
    id: 'logitech-g-pro-x-superlight-2',
    nome: 'Logitech G Pro X Superlight 2',
    marca: 'Logitech G',
    descricao: 'Mouse wireless competitivo, sensor HERO 2, 60g, switches Lightforce, bateria 95h.',
    preco: 1499.90,
    img: BASE_IMG + 'mouse-superlight.jpg'
  },
  {
    id: 'razer-huntsman-v3-pro',
    nome: 'Razer Huntsman V3 Pro TKL',
    marca: 'Razer',
    descricao: 'Teclado analógico-óptico, switches Razer HyperShift, RGB Chroma, polling rate 8000Hz.',
    preco: 2299.90,
    img: BASE_IMG + 'teclado-huntsman.jpg'
  },
  {
    id: 'hyperx-cloud-iii',
    nome: 'HyperX Cloud III',
    marca: 'HyperX',
    descricao: 'Headset gamer com som espacial DTS:X, drivers de 53mm angulados, microfone removível com cancelamento de ruído.',
    preco: 899.90,
    precoAntigo: 1199.90,
    tag: 'PROMOÇÃO',
    tagClasse: 'cyan',
    img: BASE_IMG + 'headset-cloud.png'
  },
  {
    id: 'razer-goliathus-extended',
    nome: 'Razer Goliathus Extended Chroma',
    marca: 'Razer',
    descricao: 'Mousepad 920x294mm, base antiderrapante, RGB Chroma com 16,8M de cores, superfície micro-texturizada.',
    preco: 499.90,
    img: BASE_IMG + 'mousepad-goliathus.png'
  },
  {
    id: 'razer-iskur-v2',
    nome: 'Cadeira Razer Iskur V2',
    marca: 'Razer',
    descricao: 'Apoio lombar ajustável 6D, espuma EPDM moldada, reclina 152°, suporta até 136kg.',
    preco: 4999.90,
    tag: 'NOVIDADE',
    img: BASE_IMG + 'cadeira-iskur.jpg'
  },
  {
    id: 'logitech-streamcam',
    nome: 'Logitech StreamCam',
    marca: 'Logitech',
    descricao: 'Webcam 1080p 60fps, autofoco com IA, microfone duplo estéreo, conexão USB-C plug & play.',
    preco: 1299.90,
    img: BASE_IMG + 'webcam-streamcam.jpg'
  },
  {
    id: 'hyperx-quadcast-s',
    nome: 'HyperX QuadCast S',
    marca: 'HyperX',
    descricao: 'Microfone condensador RGB para streaming, 4 padrões polares, anti-vibração, monitor por fones direto.',
    preco: 1499.90,
    img: BASE_IMG + 'microfone-quadcast.jpg'
  }
];
