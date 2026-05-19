// ====================================
// CATÁLOGO DE PRODUTOS
// Imagens diretas das marcas/lojas. Se a URL principal falhar,
// o atributo onerror faz fallback para uma URL alternativa do Unsplash.
// ====================================

const PRODUTOS = [
  {
    id: 'razer-viper-v3-pro',
    nome: 'Razer Viper V3 Pro',
    marca: 'Razer',
    descricao: 'Mouse gamer wireless de elite, sensor Focus Pro 35K, 54g ultraleve, switches ópticos Gen-3.',
    preco: 1999.90,
    tag: 'MAIS VENDIDO',
    img: 'https://assets3.razerzone.com/SBP18tROVZjC2x-_h5Wfb-EuPRk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhda%2Fhfd%2F9621657747486%2Fviper-v3-pro-black-1500x1000-1.jpg',
    imgFallback: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&h=400&fit=crop'
  },
  {
    id: 'logitech-g-pro-x-superlight-2',
    nome: 'Logitech G Pro X Superlight 2',
    marca: 'Logitech G',
    descricao: 'Mouse wireless competitivo, sensor HERO 2, 60g, switches Lightforce, bateria 95h.',
    preco: 1499.90,
    img: 'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight-2/pro-x-superlight-2-black-gallery-1.png',
    imgFallback: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&h=400&fit=crop'
  },
  {
    id: 'razer-huntsman-v3-pro',
    nome: 'Razer Huntsman V3 Pro TKL',
    marca: 'Razer',
    descricao: 'Teclado analógico-óptico, switches Razer HyperShift, RGB Chroma, polling rate 8000Hz.',
    preco: 2299.90,
    img: 'https://assets3.razerzone.com/QcAUm5YkPeUv1Df2dVR5q0HBpYM=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhd5%2Fh2c%2F9587297845278%2F230615-huntsman-v3-pro-tkl-1500x1000-1.jpg',
    imgFallback: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=400&fit=crop'
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
    img: 'https://media.hyperx.com/i/aa/cloud-iii-black/01-cloud-iii-headset-2-side.jpg',
    imgFallback: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=600&h=400&fit=crop'
  },
  {
    id: 'razer-goliathus-extended',
    nome: 'Razer Goliathus Extended Chroma',
    marca: 'Razer',
    descricao: 'Mousepad 920x294mm, base antiderrapante, RGB Chroma com 16,8M de cores, superfície micro-texturizada.',
    preco: 499.90,
    img: 'https://assets3.razerzone.com/9RmKnZx4XZJOXk3hI66TIxXwLAg=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh62%2Fhd7%2F9085218848798%2Fgoliathus-chroma-3xl-1500x1000-1.jpg',
    imgFallback: 'https://images.unsplash.com/photo-1616874535244-73aea5daadb9?w=600&h=400&fit=crop'
  },
  {
    id: 'razer-iskur-v2',
    nome: 'Cadeira Razer Iskur V2',
    marca: 'Razer',
    descricao: 'Apoio lombar ajustável 6D, espuma EPDM moldada, reclina 152°, suporta até 136kg.',
    preco: 4999.90,
    tag: 'NOVIDADE',
    img: 'https://assets3.razerzone.com/SUMrPdkmAjxV0kSrCH-2YQJzGEM=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhce%2Fh28%2F9587302039582%2F230906-iskur-v2-1500x1000-1.jpg',
    imgFallback: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&h=400&fit=crop'
  },
  {
    id: 'logitech-streamcam',
    nome: 'Logitech StreamCam',
    marca: 'Logitech',
    descricao: 'Webcam 1080p 60fps, autofoco com IA, microfone duplo estéreo, conexão USB-C plug & play.',
    preco: 1299.90,
    img: 'https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/webcams/streamcam/gallery/streamcam-graphite-gallery-1.png',
    imgFallback: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&h=400&fit=crop'
  },
  {
    id: 'hyperx-quadcast-s',
    nome: 'HyperX QuadCast S',
    marca: 'HyperX',
    descricao: 'Microfone condensador RGB para streaming, 4 padrões polares, anti-vibração, monitor por fones direto.',
    preco: 1499.90,
    img: 'https://media.hyperx.com/i/aa/quadcast-s/01-quadcast-s-mic-front.jpg',
    imgFallback: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&h=400&fit=crop'
  }
];
