/* ============================================================
   NOVA BOUTIQUE — script.js
   ============================================================ */

const WA_NUMBER = "2290169213654"; // ← Mettez votre numéro ici

/* ── SVG placeholders (remplacez par img: "images/photo.jpg" dans chaque article) */
const svgShirt = `<svg viewBox="0 0 120 140" fill="none"><path d="M40 28 Q60 18 80 28 L90 52 Q74 46 64 49 Q56 46 30 52Z" fill="#c8b89a"/><rect x="30" y="52" width="60" height="65" rx="5" fill="#c8b89a"/><rect x="18" y="52" width="14" height="46" rx="5" fill="#c8b89a"/><rect x="88" y="52" width="14" height="46" rx="5" fill="#c8b89a"/></svg>`;
const svgJogging = `<svg viewBox="0 0 120 140" fill="none"><rect x="38" y="22" width="44" height="30" rx="6" fill="#b0a899"/><rect x="28" y="52" width="30" height="70" rx="6" fill="#b0a899"/><rect x="62" y="52" width="30" height="70" rx="6" fill="#b0a899"/><rect x="38" y="50" width="44" height="10" rx="4" fill="#9a9088"/></svg>`;
const svgHaut = `<svg viewBox="0 0 120 140" fill="none"><path d="M50 22 Q60 16 70 22 L85 40 L72 44 L70 36 L70 110 L50 110 L50 36 L48 44 L35 40Z" fill="#d4c4b0"/><ellipse cx="60" cy="22" rx="10" ry="7" fill="#d4c4b0" stroke="#c8b89a" stroke-width="1.5"/></svg>`;

/* ============================================================
   CATALOGUE
   Pour mettre une vraie photo, remplacez  svg: svgShirt
   par  img: "images/nom-de-votre-photo.jpg"
   et placez vos photos dans un dossier "images/" à côté de index.html
   ============================================================ */
const products = [
  // ── FEMME ─────────────────────────────────────────────────
  // Hauts femme
  { id:1,  cat:"femme", type:"hauts",    name:"Haut Élégance",         desc:"Haut en tissu doux, coupe ajustée. Idéal pour sortie ou bureau. Disponible en beige, noir et blanc.",      price:"4 500 FCFA", tag:null,      img:"img/Femme/img2.jpeg" },
  { id:3,  cat:"femme", type:"hauts",    name:"Haut Crop Fleuri",      desc:"Haut crop légèrement évasé, imprimé floral délicat. Parfait avec un jean taille haute.",                   price:"3 500 FCFA", tag:null,      img:"img/Femme/img2.jpeg"    },
  { id:2,  cat:"femme", type:"hauts",    name:"Haut Col V",            desc:"Haut col V soyeux, tombé parfait. Coloris pastel disponibles : rose, bleu ciel, blanc.",                   price:"3 800 FCFA", tag:"Nouveau", img:"img/Femme/img2.jpeg"    },
  { id:4,  cat:"femme", type:"hauts",    name:"Haut Satiné",           desc:"Tissu satiné léger, fluide. Coupe droite moderne. Coloris : champagne, noir, bordeaux.",                   price:"5 000 FCFA", tag:"Nouveau", img:"img/Femme/img2.jpeg"    },
  // T-shirts femme
  { id:5,  cat:"femme", type:"tshirts",  name:"T-shirt Coton Femme",   desc:"T-shirt 100% coton, respirant et confortable. Coupe droite, col rond. Parfait pour le quotidien.",         price:"2 800 FCFA", tag:null,       img:"img/Femme/img2.jpeg"   },
  { id:6,  cat:"femme", type:"tshirts",  name:"T-shirt Oversize Femme",desc:"Oversize tendance, coton épais. Parfait pour un look décontracté et moderne.",                             price:"3 200 FCFA", tag:"Nouveau",  img:"img/Femme/img2.jpeg"   },
  { id:7,  cat:"femme", type:"tshirts",  name:"T-shirt Graphique",     desc:"Design exclusif imprimé, édition limitée. Col rond, manches courtes. Blanc ou noir.",                      price:"3 500 FCFA", tag:null,       img:"img/Femme/img2.jpeg"   },
  { id:8,  cat:"femme", type:"tshirts",  name:"T-shirt Basique Pack",  desc:"Pack de 2 t-shirts basiques. Coton doux, coupe féminine. Couleurs neutres.",                               price:"5 000 FCFA", tag:"Promo",   oldPrice:"6 500 FCFA", img:"img/Femme/img2.jpeg" },
  // Joggings femme
  { id:9,  cat:"femme", type:"joggings", name:"Jogging Femme Doux",    desc:"Jogging en molleton léger. Elastique confortable à la taille. Parfait pour la maison.",                    price:"6 500 FCFA", tag:"Promo",   oldPrice:"8 000 FCFA", img:"img/Femme/img2.jpeg" },
  { id:10, cat:"femme", type:"joggings", name:"Ensemble Jogging Femme",desc:"Haut + bas assorti, molleton doux. Rose poudré, beige ou noir.",                                           price:"11 000 FCFA",tag:"Promo",   oldPrice:"14 000 FCFA", img:"img/Femme/img2.jpeg" },
  { id:11, cat:"femme", type:"joggings", name:"Jogging Taille Haute",  desc:"Coupe taille haute très tendance. Tissu épais et confortable. Noir, gris ou rose.",                        price:"7 000 FCFA", tag:"Nouveau", img:"img/Femme/img2.jpeg" },
  { id:12, cat:"femme", type:"joggings", name:"Jogging Velours Femme", desc:"Velours doux au toucher, coupe slim. Très élégant pour un look casual-chic.",                             price:"8 500 FCFA", tag:null,      img:"img/Femme/img2.jpeg" },

  // ── HOMME ─────────────────────────────────────────────────
  // Hauts homme
  { id:13, cat:"homme", type:"hauts",    name:"Haut Sport Homme",      desc:"Haut léger pour le sport ou le quotidien. Tissu technique respirant. Noir, blanc, marine.",                price:"4 000 FCFA", tag:null,    img:"img/Homme/img01.jpeg"    },
  { id:14, cat:"homme", type:"hauts",    name:"Haut Lin Homme",        desc:"Haut en lin naturel, très respirant. Idéal pour les journées chaudes. Beige ou blanc.",                   price:"5 500 FCFA", tag:"Nouveau",img:"img/Homme/img01.jpeg"     },
  // T-shirts homme
  { id:15, cat:"homme", type:"tshirts",  name:"T-shirt Classique",     desc:"T-shirt classique coton épais, coupe droite. Disponible en S, M, L, XL. Noir, blanc, marine.",            price:"3 000 FCFA", tag:null,      img:"img/Homme/img01.jpeg"    },
  { id:16, cat:"homme", type:"tshirts",  name:"T-shirt Oversize",      desc:"Coupe oversize tendance. Tissu lourd de qualité premium. Idéal pour un look streetwear.",                  price:"3 800 FCFA", tag:"Nouveau", img:"img/Homme/img01.jpeg"    },
  { id:17, cat:"homme", type:"tshirts",  name:"T-shirt Graphique",     desc:"Design imprimé exclusif NOVA. Édition limitée. Coton 220g. Blanc ou noir.",                               price:"4 200 FCFA", tag:"Nouveau", img:"img/Homme/img01.jpeg"    },
  { id:18, cat:"homme", type:"tshirts",  name:"T-shirt Pack x2",       desc:"Pack de 2 t-shirts basiques col rond. Idéal comme sous-vêtement ou tenue décontractée.",                  price:"5 000 FCFA", tag:null,      img:"img/Homme/img01.jpeg"    },
  // Joggings homme
  { id:19, cat:"homme", type:"joggings", name:"Jogging Sport",         desc:"Jogging en coton brossé, taille élastique avec cordon. Poches zippées. Très confortable.",                price:"7 000 FCFA", tag:null,      img:"img/Homme/img01.jpeg"  },
  { id:20, cat:"homme", type:"joggings", name:"Ensemble Jogging",      desc:"Haut + bas assortis. Coton molletonné. Gris chiné, noir ou navy.",                                        price:"12 000 FCFA",tag:"Promo",   oldPrice:"15 000 FCFA", img:"img/Homme/img01.jpeg"  },
  { id:21, cat:"homme", type:"joggings", name:"Jogging Premium",       desc:"Molleton épais anti-froid. Coupe droite avec bandes latérales. Très résistant.",                           price:"8 500 FCFA", tag:null,      img:"img/Homme/img01.jpeg"  },
  { id:22, cat:"homme", type:"joggings", name:"Jogging Slim Homme",    desc:"Coupe slim moderne. Tissu stretch confortable. Noir ou gris anthracite.",                                  price:"7 500 FCFA", tag:"Nouveau", img:"img/Homme/img01.jpeg"  },

  // ── UNISEXE ───────────────────────────────────────────────
  // Hauts unisexe
  { id:23, cat:"unisexe", type:"hauts",    name:"Haut Sport Unisexe",  desc:"Haut technique unisexe, léger et respirant. Parfait pour le sport ou la détente.",                       price:"3 800 FCFA", tag:null,      img:"img/Unisexe/img01.jpeg"   },
  { id:24, cat:"unisexe", type:"hauts",    name:"Haut Oversize",       desc:"Haut oversize ample et confortable. Coupe neutre pour tous. Beige, noir ou blanc.",                       price:"4 200 FCFA", tag:"Nouveau", img:"img/Unisexe/img01.jpeg" },
  // T-shirts unisexe
  { id:25, cat:"unisexe", type:"tshirts",  name:"T-shirt Basic",       desc:"Le basique indispensable. Coupe neutre adaptée à tous. Matière épaisse et douce. S à XXL.",               price:"2 500 FCFA", tag:null,      img:"img/Unisexe/img01.jpeg"   },
  { id:26, cat:"unisexe", type:"tshirts",  name:"T-shirt Graphique",   desc:"T-shirt avec design imprimé exclusif NOVA. Édition limitée. Unisexe, coupe confortable.",                 price:"4 000 FCFA", tag:"Promo",   oldPrice:"5 000 FCFA", img:"img/Unisexe/img01.jpeg" },
  { id:27, cat:"unisexe", type:"tshirts",  name:"T-shirt Tie & Dye",  desc:"Tie & Dye fait à la main, chaque pièce est unique. Coupe large. Plusieurs coloris.",                      price:"4 500 FCFA", tag:"Nouveau", img:"img/Unisexe/img01.jpeg"   },
  { id:28, cat:"unisexe", type:"tshirts",  name:"T-shirt Long",        desc:"T-shirt manches longues, coton doux. Coupe neutre. Blanc, noir ou gris.",                                  price:"3 500 FCFA", tag:null,      img:"img/Unisexe/img01.jpeg"   },
  // Joggings unisexe
  { id:29, cat:"unisexe", type:"joggings", name:"Jogging Comfort",     desc:"Jogging ample et confortable pour tous. Molleton léger anti-bouloche. Couleurs neutres.",                  price:"5 500 FCFA", tag:"Nouveau", img:"img/Unisexe/img01.jpeg" },
  { id:30, cat:"unisexe", type:"joggings", name:"Ensemble Détente",    desc:"Duo haut + jogging assortis, unisexe. Parfait pour la maison ou une sortie décontractée.",                price:"9 500 FCFA", tag:null,      img:"img/Unisexe/img01.jpeg" },
  { id:31, cat:"unisexe", type:"joggings", name:"Jogging Pastel",      desc:"Coloris pastel doux. Taille élastique, poches. Très doux au toucher.",                                    price:"6 000 FCFA", tag:null,      img:"img/Unisexe/img01.jpeg" },
  { id:32, cat:"unisexe", type:"joggings", name:"Jogging Molleton Xl", desc:"Jogging molleton épais XXL, ultra doux. Pour les journées fraîches.",                                      price:"7 200 FCFA", tag:"Promo",   oldPrice:"9 000 FCFA", img:"img/Unisexe/img01.jpeg" },
];

// Définition des 3 rangées et leurs étiquettes
const ROWS = [
  { type: "hauts",    label: "🧥 Ensemble",    sub: "ensembles & tops" },
  { type: "tshirts",  label: "👕 T-shirts", sub: "T-shirts & basiques" },
  { type: "joggings", label: "🩳 Joggings", sub: "Joggings & bagy" },
];

const bestSellerIds = [5, 15, 25, 29];

/* ============================================================
   NAVIGATION
   ============================================================ */
const pages    = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

function goToPage(pageId) {
  pages.forEach(p => p.classList.remove('active'));
  navLinks.forEach(l => l.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) { target.classList.add('active'); window.scrollTo(0, 0); }
  navLinks.forEach(l => { if (l.dataset.page === pageId) l.classList.add('active'); });
  closeMobileMenu();
  setTimeout(observeReveals, 60);
}

navLinks.forEach(link => {
  link.addEventListener('click', e => { e.preventDefault(); goToPage(link.dataset.page); });
});

// Boutons avec data-page (hero, etc.)
document.addEventListener('click', e => {
  const btn = e.target.closest('[data-page]');
  if (!btn) return;
  if (btn.classList.contains('nav-link') || btn.classList.contains('mobile-link')) return;
  e.preventDefault();
  goToPage(btn.dataset.page);
});

/* ============================================================
   MOBILE MENU
   ============================================================ */
const menuBtn    = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const overlay    = document.getElementById('overlay');

function openMobileMenu()  { mobileMenu.classList.add('open');    overlay.classList.add('show'); }
function closeMobileMenu() { mobileMenu.classList.remove('open'); overlay.classList.remove('show'); }

menuBtn.addEventListener('click', openMobileMenu);
document.getElementById('closeMenu').addEventListener('click', closeMobileMenu);
overlay.addEventListener('click', closeMobileMenu);

window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 10);
});

/* ============================================================
   CARTE PRODUIT
   ============================================================ */
function buildCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';

  const tagHtml = product.tag
    ? `<span class="tag${product.tag === 'Promo' ? ' promo' : ''}">${product.tag}</span>` : '';
  const oldHtml = product.oldPrice
    ? `<span class="old-price">${product.oldPrice}</span>` : '';

  // Image réelle ou SVG placeholder
  const mediaHtml = product.img
    ? `<img src="${product.img}" alt="${product.name}" loading="lazy" />`
    : product.svg;

  card.innerHTML = `
    <div class="product-img">${mediaHtml}${tagHtml}</div>
    <div class="product-info">
      <p class="product-name">${product.name}</p>
      <p class="product-price">${product.price}${oldHtml}</p>
    </div>
    <span class="btn-order">Commander</span>
  `;
  card.querySelector('.btn-order').addEventListener('click', e => { e.stopPropagation(); openModal(product); });
  card.addEventListener('click', () => openModal(product));
  return card;
}

/* ============================================================
   GRILLE BEST SELLERS (accueil)
   ============================================================ */
const grid = document.getElementById('bestSellers');
products.filter(p => bestSellerIds.includes(p.id))
  .forEach((p, i) => {
    const c = buildCard(p);
    c.style.animationDelay = `${i * 70}ms`;
    grid.appendChild(c);
  });

/* ============================================================
   ONGLETS + 3 RANGÉES CARROUSEL PAR CATÉGORIE
   ============================================================ */
const catContent = document.getElementById('catContent');
let activeCarousels = {}; // { "femme-hauts": {index, total}, ... }

function CARD_W() {
  const w = window.innerWidth;
  if (w >= 640) return 200 + 14;
  if (w >= 400) return 170 + 14;
  return 155 + 14;
}

function buildCarouselRow(cat, rowDef) {
  const key   = `${cat}-${rowDef.type}`;
  const items = products.filter(p => p.cat === cat && p.type === rowDef.type);
  if (!items.length) return null;

  const section = document.createElement('div');
  section.className = 'row-section';
  section.innerHTML = `
    <div class="row-header">
      <div class="row-label">
        <span class="row-emoji-label">${rowDef.label}</span>
        <span class="row-sub">${rowDef.sub}</span>
      </div>
      <div class="row-nav">
        <button class="row-btn" data-key="${key}" data-dir="-1">‹</button>
        <button class="row-btn" data-key="${key}" data-dir="1">›</button>
      </div>
    </div>
    <div class="carousel-track-wrap" id="wrap-${key}">
      <div class="carousel-track" id="track-${key}"></div>
    </div>
    <div class="carousel-dots" id="dots-${key}"></div>
  `;

  const track = section.querySelector(`#track-${key}`);
  const dots  = section.querySelector(`#dots-${key}`);

  items.forEach(p => track.appendChild(buildCard(p)));

  activeCarousels[key] = { index: 0, total: items.length };

  // Dots
  items.forEach((_, i) => {
    const d = document.createElement('span');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => carouselGoTo(key, i));
    dots.appendChild(d);
  });

  // Boutons flèches
  section.querySelectorAll('.row-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      carouselGoTo(key, activeCarousels[key].index + parseInt(btn.dataset.dir));
    });
  });

  // Swipe
  initSwipe(key, section.querySelector(`#wrap-${key}`));

  return section;
}

function carouselGoTo(key, index) {
  const state = activeCarousels[key];
  if (!state) return;
  const wrap  = document.getElementById(`wrap-${key}`);
  const track = document.getElementById(`track-${key}`);
  const dots  = document.getElementById(`dots-${key}`);
  if (!wrap || !track) return;

  const visible  = Math.floor(wrap.offsetWidth / CARD_W());
  const maxIndex = Math.max(0, state.total - visible);
  state.index    = Math.max(0, Math.min(index, maxIndex));

  track.style.transform = `translateX(-${state.index * CARD_W()}px)`;

  // Mettre à jour dots
  dots && dots.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('active', i === state.index || (state.index >= maxIndex && i === maxIndex));
  });
}

function renderCategory(cat) {
  catContent.innerHTML = '';
  activeCarousels = {};
  ROWS.forEach(row => {
    const section = buildCarouselRow(cat, row);
    if (section) catContent.appendChild(section);
  });
  setTimeout(observeReveals, 60);
}

// Onglets
document.querySelectorAll('.cat-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderCategory(tab.dataset.cat);
  });
});

// Charger femme par défaut
renderCategory('femme');

// Resize
window.addEventListener('resize', () => {
  Object.keys(activeCarousels).forEach(key => carouselGoTo(key, activeCarousels[key].index));
});

/* ── Swipe tactile ── */
function initSwipe(key, wrap) {
  let startX = 0, startY = 0, dragging = false, moved = false;

  wrap.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    dragging = true; moved = false;
  }, { passive: true });

  wrap.addEventListener('touchmove', e => {
    if (!dragging) return;
    const dx = e.touches[0].clientX - startX;
    const dy = e.touches[0].clientY - startY;
    if (Math.abs(dx) > Math.abs(dy) + 5) { moved = true; e.preventDefault(); }
  }, { passive: false });

  wrap.addEventListener('touchend', e => {
    if (!dragging || !moved) { dragging = false; return; }
    dragging = false;
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) carouselGoTo(key, activeCarousels[key].index + (diff > 0 ? 1 : -1));
  });

  // Drag souris
  wrap.addEventListener('mousedown', e => { startX = e.clientX; dragging = true; moved = false; });
  wrap.addEventListener('mousemove', e => { if (dragging && Math.abs(e.clientX - startX) > 5) moved = true; });
  wrap.addEventListener('mouseup',   e => {
    if (!dragging || !moved) { dragging = false; return; }
    dragging = false;
    const diff = startX - e.clientX;
    if (Math.abs(diff) > 40) carouselGoTo(key, activeCarousels[key].index + (diff > 0 ? 1 : -1));
  });
  wrap.addEventListener('mouseleave', () => { dragging = false; });
  wrap.style.cursor = 'grab';
}

/* ============================================================
   PROMO CARDS
   ============================================================ */
const promoOffers = [
  { emoji:"👗", title:"Hauts Femme",  desc:"À partir de 2 800 FCFA" },
  { emoji:"👕", title:"T-shirts",     desc:"Dès 2 500 FCFA" },
  { emoji:"🩳", title:"Joggings",     desc:"Livraison gratuite dès 2 articles" },
  { emoji:"🎁", title:"Pack Duo",     desc:"-15% sur 2 articles achetés" },
];
const promoContainer = document.getElementById('promoCards');
promoOffers.forEach(o => {
  const d = document.createElement('div');
  d.className = 'promo-card';
  d.innerHTML = `<div class="promo-card-emoji">${o.emoji}</div><h4>${o.title}</h4><p>${o.desc}</p>`;
  promoContainer.appendChild(d);
});

/* ============================================================
   MODAL
   ============================================================ */
const modalOverlay = document.getElementById('modalOverlay');
const modalClose   = document.getElementById('modalClose');
const modalOrder   = document.getElementById('modalOrder');

function openModal(product) {
  const mediaHtml = product.img
    ? `<img src="${product.img}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;border-radius:16px;" />`
    : product.svg;
  document.getElementById('modalImg').innerHTML   = mediaHtml;
  document.getElementById('modalCat').textContent = product.cat.charAt(0).toUpperCase() + product.cat.slice(1) + ' · ' + ROWS.find(r=>r.type===product.type)?.label;
  document.getElementById('modalTitle').textContent = product.name;
  document.getElementById('modalDesc').textContent  = product.desc;
  document.getElementById('modalPrice').textContent = product.price;

  const msg = encodeURIComponent(`Bonjour NOVA ! 👋\nJe voudrais commander : *${product.name}*\nPrix : ${product.price}\nMerci de me donner les disponibilités.`);
  modalOrder.href = `https://wa.me/${WA_NUMBER}?text=${msg}`;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

/* ============================================================
   FORMULAIRE CONTACT
   ============================================================ */
document.getElementById('sendFormBtn').addEventListener('click', () => {
  const name    = document.getElementById('formName').value.trim();
  const product = document.getElementById('formProduct').value.trim();
  const msg     = document.getElementById('formMsg').value.trim();
  if (!name && !product && !msg) { alert('Remplissez au moins un champ.'); return; }
  let text = `Bonjour NOVA ! 👋\n`;
  if (name)    text += `Nom : ${name}\n`;
  if (product) text += `Article : ${product}\n`;
  if (msg)     text += `Message : ${msg}`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
});

/* ============================================================
   ANIMATIONS REVEAL
   ============================================================ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.1 });

function observeReveals() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}
observeReveals();
