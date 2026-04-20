/* ============================================================
   NOVA BOUTIQUE — script.js
   ============================================================ */

const WA_NUMBER = "2290169213654";

const svgShirt   = `<svg viewBox="0 0 120 140" fill="none"><path d="M40 28 Q60 18 80 28 L90 52 Q74 46 64 49 Q56 46 30 52Z" fill="#c8b89a"/><rect x="30" y="52" width="60" height="65" rx="5" fill="#c8b89a"/><rect x="18" y="52" width="14" height="46" rx="5" fill="#c8b89a"/><rect x="88" y="52" width="14" height="46" rx="5" fill="#c8b89a"/></svg>`;
const svgJogging = `<svg viewBox="0 0 120 140" fill="none"><rect x="38" y="22" width="44" height="30" rx="6" fill="#b0a899"/><rect x="28" y="52" width="30" height="70" rx="6" fill="#b0a899"/><rect x="62" y="52" width="30" height="70" rx="6" fill="#b0a899"/><rect x="38" y="50" width="44" height="10" rx="4" fill="#9a9088"/></svg>`;
const svgHaut    = `<svg viewBox="0 0 120 140" fill="none"><path d="M50 22 Q60 16 70 22 L85 40 L72 44 L70 36 L70 110 L50 110 L50 36 L48 44 L35 40Z" fill="#d4c4b0"/><ellipse cx="60" cy="22" rx="10" ry="7" fill="#d4c4b0" stroke="#c8b89a" stroke-width="1.5"/></svg>`;

/* ============================================================
   CATALOGUE
   ============================================================ */
const products = [
  // FEMME
  { id:1,  cat:"femme", type:"hauts",    name:"Haut Élégance",          desc:"Haut en tissu doux, coupe ajustée. Beige, noir et blanc.",          price:"4 500 FCFA", priceNum:4500,  tag:null,      img:"img/Femme/haut1.jpeg" },
  { id:2,  cat:"femme", type:"hauts",    name:"Haut Col V",             desc:"Haut col V soyeux, tombé parfait. Coloris pastel.",                 price:"3 800 FCFA", priceNum:3800,  tag:"Nouveau", img:"img/Femme/haut2.jpeg" },
  { id:3,  cat:"femme", type:"hauts",    name:"Haut Crop Fleuri",       desc:"Haut crop imprimé floral. Parfait avec un jean taille haute.",      price:"3 500 FCFA", priceNum:3500,  tag:null,      img:"img/Femme/haut3.jpeg" },
  { id:4,  cat:"femme", type:"hauts",    name:"Haut Satiné",            desc:"Tissu satiné léger. Champagne, noir, bordeaux.",                   price:"5 000 FCFA", priceNum:5000,  tag:"Nouveau", img:"img/Femme/haut4.jpeg" },
  { id:5,  cat:"femme", type:"tshirts",  name:"T-shirt Coton Femme",    desc:"100% coton, respirant. Coupe droite, col rond.",                   price:"2 800 FCFA", priceNum:2800,  tag:null,      img:"img/Femme/Top6.jpeg" },
  { id:6,  cat:"femme", type:"tshirts",  name:"T-shirt Oversize Femme", desc:"Oversize tendance, coton épais. Look décontracté.",                price:"3 200 FCFA", priceNum:3200,  tag:"Nouveau", img:"img/Femme/Top2.jpeg" },
  { id:7,  cat:"femme", type:"tshirts",  name:"T-shirt Graphique",      desc:"Design exclusif imprimé, édition limitée. Col rond.",              price:"3 500 FCFA", priceNum:3500,  tag:null,      img:"img/Femme/Top3.jpeg" },
  { id:8,  cat:"femme", type:"tshirts",  name:"T-shirt Basique Pack",   desc:"Pack de 2 t-shirts basiques. Coton doux, coupe féminine.",         price:"5 000 FCFA", priceNum:5000,  tag:"Promo", oldPrice:"6 500 FCFA", img:"img/Femme/Top4.jpeg" },
  { id:9,  cat:"femme", type:"joggings", name:"Jogging Femme Doux",     desc:"Molleton léger. Elastique confortable. Parfait pour la maison.",   price:"6 500 FCFA", priceNum:6500,  tag:"Promo", oldPrice:"8 000 FCFA", img:"img/Femme/bas1.jpeg" },
  { id:10, cat:"femme", type:"joggings", name:"Ensemble Jogging Femme", desc:"Haut + bas assorti, molleton doux. Rose, beige ou noir.",          price:"11 000 FCFA",priceNum:11000, tag:"Promo", oldPrice:"14 000 FCFA", img:"img/Femme/bas2.jpeg" },
  { id:11, cat:"femme", type:"joggings", name:"Jogging Taille Haute",   desc:"Coupe taille haute tendance. Noir, gris ou rose.",                 price:"7 000 FCFA", priceNum:7000,  tag:"Nouveau", img:"img/Femme/bas3.jpeg" },
  { id:12, cat:"femme", type:"joggings", name:"Jogging Velours Femme",  desc:"Velours doux, coupe slim. Élégant pour un look casual-chic.",      price:"8 500 FCFA", priceNum:8500,  tag:null,      img:"img/Femme/bas4.jpeg" },
  // HOMME
  { id:13, cat:"homme", type:"hauts",    name:"Haut Sport Homme",       desc:"Tissu technique respirant. Noir, blanc, marine.",                  price:"4 000 FCFA", priceNum:4000,  tag:null,      img:"img/Homme/complet1.jpeg" },
  { id:14, cat:"homme", type:"hauts",    name:"Haut Lin Homme",         desc:"Lin naturel, très respirant. Idéal pour les journées chaudes.",    price:"5 500 FCFA", priceNum:5500,  tag:"Nouveau", img:"img/Homme/complet2.jpeg" },
  { id:15, cat:"homme", type:"hauts",    name:"Haut Lin Homme",         desc:"Lin naturel, très respirant. Idéal pour les journées chaudes.",    price:"5 500 FCFA", priceNum:5500,  tag:"Nouveau", img:"img/Homme/complet3.jpeg" },
  { id:16, cat:"homme", type:"hauts",    name:"Haut Lin Homme",         desc:"Lin naturel, très respirant. Idéal pour les journées chaudes.",    price:"5 500 FCFA", priceNum:5500,  tag:"Nouveau", img:"img/Homme/complet4.jpeg" },
  { id:17, cat:"homme", type:"tshirts",  name:"T-shirt Classique",      desc:"Coton épais, coupe droite. S, M, L, XL. Noir, blanc, marine.",    price:"3 000 FCFA", priceNum:3000,  tag:null,      img:"img/Homme/haut1.jpeg" },
  { id:18, cat:"homme", type:"tshirts",  name:"T-shirt Oversize",       desc:"Coupe oversize tendance. Tissu lourd premium. Look streetwear.",   price:"3 800 FCFA", priceNum:3800,  tag:"Nouveau", img:"img/Homme/haut2.jpeg" },
  { id:19, cat:"homme", type:"tshirts",  name:"T-shirt Graphique",      desc:"Design imprimé exclusif NOVA. Édition limitée. Coton 220g.",      price:"4 200 FCFA", priceNum:4200,  tag:"Nouveau", img:"img/Homme/haut3.jpeg" },
  { id:20, cat:"homme", type:"tshirts",  name:"T-shirt Pack x2",        desc:"Pack 2 t-shirts basiques col rond.",                              price:"5 000 FCFA", priceNum:5000,  tag:null,      img:"img/Homme/haut4.jpeg" },
  { id:21, cat:"homme", type:"joggings", name:"Jogging Sport",          desc:"Coton brossé, taille élastique + cordon. Poches zippées.",        price:"7 000 FCFA", priceNum:7000,  tag:null,      img:"img/Homme/bas1.jpeg" },
  { id:22, cat:"homme", type:"joggings", name:"Ensemble Jogging",       desc:"Haut + bas assortis. Molletonné. Gris chiné, noir ou navy.",      price:"12 000 FCFA",priceNum:12000, tag:"Promo", oldPrice:"15 000 FCFA", img:"img/Homme/bas2.jpeg" },
  { id:23, cat:"homme", type:"joggings", name:"Jogging Premium",        desc:"Molleton épais anti-froid. Bandes latérales. Très résistant.",    price:"8 500 FCFA", priceNum:8500,  tag:null,      img:"img/Homme/bas3.jpeg" },
  { id:24, cat:"homme", type:"joggings", name:"Jogging Slim Homme",     desc:"Coupe slim moderne. Tissu stretch confortable.",                  price:"7 500 FCFA", priceNum:7500,  tag:"Nouveau", img:"img/Homme/bas4.jpeg" },
  // UNISEXE
  { id:25, cat:"unisexe", type:"hauts",    name:"Haut Sport Unisexe",   desc:"Léger et respirant pour tous. Sport ou détente.",                 price:"3 800 FCFA", priceNum:3800,  tag:null,      img:"img/Unisexe/complet1.jpeg" },
  { id:26, cat:"unisexe", type:"hauts",    name:"Haut Oversize",        desc:"Ample et confortable. Beige, noir ou blanc.",                     price:"4 200 FCFA", priceNum:4200,  tag:"Nouveau", img:"img/Unisexe/complet2.jpeg" },
  { id:27, cat:"unisexe", type:"hauts",    name:"Haut Oversize",        desc:"Ample et confortable. Beige, noir ou blanc.",                     price:"4 200 FCFA", priceNum:4200,  tag:"Nouveau", img:"img/Unisexe/complet3.jpeg" },
  { id:28, cat:"unisexe", type:"hauts",    name:"Haut Oversize",        desc:"Ample et confortable. Beige, noir ou blanc.",                     price:"4 200 FCFA", priceNum:4200,  tag:"Nouveau", img:"img/Unisexe/complet4" },

  { id:29, cat:"unisexe", type:"tshirts",  name:"T-shirt Basic",        desc:"Le basique indispensable. Coupe neutre S à XXL.",                 price:"2 500 FCFA", priceNum:2500,  tag:null,      img:"img/Unisexe/haut1.jpeg" },
  { id:30, cat:"unisexe", type:"tshirts",  name:"T-shirt Graphique",    desc:"Design exclusif NOVA. Édition limitée.",                          price:"4 000 FCFA", priceNum:4000,  tag:"Promo", oldPrice:"5 000 FCFA", img:"img/Unisexe/haut2.jpeg" },
  { id:31, cat:"unisexe", type:"tshirts",  name:"T-shirt Tie & Dye",    desc:"Tie & Dye fait main, chaque pièce est unique.",                   price:"4 500 FCFA", priceNum:4500,  tag:"Nouveau", img:"img/Unisexe/haut3.jpeg" },
  { id:32, cat:"unisexe", type:"tshirts",  name:"T-shirt Long",         desc:"Manches longues, coton doux. Coupe neutre.",                      price:"3 500 FCFA", priceNum:3500,  tag:null,      img:"img/Unisexe/haut4.jpeg" },
  { id:33, cat:"unisexe", type:"joggings", name:"Jogging Comfort",      desc:"Ample pour tous. Molleton léger anti-bouloche.",                  price:"5 500 FCFA", priceNum:5500,  tag:"Nouveau", img:"img/Unisexe/bas1.jpeg" },
  { id:34, cat:"unisexe", type:"joggings", name:"Ensemble Détente",     desc:"Haut + jogging assortis. Maison ou sortie décontractée.",         price:"9 500 FCFA", priceNum:9500,  tag:null,      img:"img/Unisexe/bas2.jpeg" },
  { id:35, cat:"unisexe", type:"joggings", name:"Jogging Pastel",       desc:"Coloris pastel doux. Taille élastique, poches.",                  price:"6 000 FCFA", priceNum:6000,  tag:null,      img:"img/Unisexe/bas3.jpeg" },
  { id:36, cat:"unisexe", type:"joggings", name:"Jogging Molleton XL",  desc:"Molleton épais XXL, ultra doux. Pour les journées fraîches.",     price:"7 200 FCFA", priceNum:7200,  tag:"Promo", oldPrice:"9 000 FCFA", img:"img/Unisexe/b.jpeg" },
];

const ROWS = [
  { type:"hauts",    label:"🧥 Ensembles",  sub:"Ensembles & tops" },
  { type:"tshirts",  label:"👕 T-shirts",   sub:"T-shirts & basiques" },
  { type:"joggings", label:"🩳 Joggings",   sub:"Joggings & baggy" },
];

const bestSellerIds = [5, 15, 25, 29];

/* ============================================================
   PANIER
   ============================================================ */
let cart = []; // [{ product, qty }]

function cartTotal() {
  return cart.reduce((sum, item) => sum + item.product.priceNum * item.qty, 0);
}
function cartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}
function formatPrice(n) {
  return n.toLocaleString('fr-FR') + ' FCFA';
}

function addToCart(product) {
  const existing = cart.find(i => i.product.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ product, qty: 1 });
  }
  updateCartUI();
  showToast(`✓ ${product.name} ajouté au panier`);
  closeModal();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.product.id !== productId);
  updateCartUI();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.product.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId);
  else updateCartUI();
}

function clearCart() {
  cart = [];
  updateCartUI();
}

function updateCartUI() {
  // Badge compteur
  const count = cartCount();
  const badge = document.getElementById('cartCount');
  badge.textContent = count;
  badge.classList.toggle('visible', count > 0);

  // Corps du drawer
  const body = document.getElementById('cartBody');
  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛍️</div>
        <p>Votre panier est vide</p>
        <span>Ajoutez des articles pour commencer</span>
      </div>`;
  } else {
    body.innerHTML = '';
    cart.forEach(item => {
      const el = document.createElement('div');
      el.className = 'cart-item';
      const mediaHtml = item.product.img
        ? `<img src="${item.product.img}" alt="${item.product.name}">`
        : item.product.svg || '';
      el.innerHTML = `
        <div class="cart-item-img">${mediaHtml}</div>
        <div class="cart-item-info">
          <p class="cart-item-name">${item.product.name}</p>
          <p class="cart-item-price">${item.product.price}</p>
          <div class="cart-item-qty">
            <button class="qty-btn" data-id="${item.product.id}" data-delta="-1">−</button>
            <span class="qty-value">${item.qty}</span>
            <button class="qty-btn" data-id="${item.product.id}" data-delta="1">+</button>
          </div>
        </div>
        <button class="cart-item-remove" data-id="${item.product.id}" title="Supprimer">✕</button>
      `;
      body.appendChild(el);
    });

    // Délégation événements
    body.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', () => changeQty(parseInt(btn.dataset.id), parseInt(btn.dataset.delta)));
    });
    body.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
    });
  }

  // Total
  document.getElementById('cartTotal').textContent = formatPrice(cartTotal());

  // Bouton commander
  document.getElementById('checkoutBtn').disabled = cart.length === 0;
}

/* Ouvrir / fermer le panier */
function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('show');
  document.body.style.overflow = '';
}

document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
document.getElementById('cartOverlay').addEventListener('click', closeCart);
document.getElementById('clearCartBtn').addEventListener('click', () => {
  if (cart.length === 0) return;
  if (confirm('Vider le panier ?')) clearCart();
});

/* Confirmer la commande → WhatsApp */
document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (cart.length === 0) return;

  let msg = `Bonjour NOVA ! 👋\n\n`;
  msg += `🛍️ *Ma commande :*\n`;
  msg += `${'─'.repeat(25)}\n`;
  cart.forEach(item => {
    const lineTotal = item.product.priceNum * item.qty;
    msg += `• ${item.product.name}\n`;
    msg += `  Qté : ${item.qty} × ${item.product.price} = ${formatPrice(lineTotal)}\n`;
  });
  msg += `${'─'.repeat(25)}\n`;
  msg += `💰 *Total : ${formatPrice(cartTotal())}*\n\n`;
  msg += `Merci de confirmer les disponibilités et la livraison. 🙏`;

  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
});

/* Toast */
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

/* ============================================================
   NAVIGATION
   ============================================================ */
const pages    = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

function goToPage(pageId) {
  pages.forEach(p => p.classList.remove('active'));
  navLinks.forEach(l => l.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) { target.classList.add('active'); window.scrollTo(0,0); }
  navLinks.forEach(l => { if (l.dataset.page === pageId) l.classList.add('active'); });
  closeMobileMenu();
  setTimeout(observeReveals, 60);
}

navLinks.forEach(link => {
  link.addEventListener('click', e => { e.preventDefault(); goToPage(link.dataset.page); });
});
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

  const tagHtml  = product.tag ? `<span class="tag${product.tag==='Promo'?' promo':''}">${product.tag}</span>` : '';
  const oldHtml  = product.oldPrice ? `<span class="old-price">${product.oldPrice}</span>` : '';
  const mediaHtml = product.img
    ? `<img src="${product.img}" alt="${product.name}" loading="lazy">`
    : product.svg;

  card.innerHTML = `
    <div class="product-img">${mediaHtml}${tagHtml}</div>
    <div class="product-info">
      <p class="product-name">${product.name}</p>
      <p class="product-price">${product.price}${oldHtml}</p>
    </div>
    <button class="btn-add-cart">🛒 Ajouter au panier</button>
  `;

  // Clic sur carte → modal détail
  card.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) return;
    openModal(product);
  });
  // Clic direct sur le bouton → ajoute sans ouvrir la modal
  card.querySelector('.btn-add-cart').addEventListener('click', e => {
    e.stopPropagation();
    addToCart(product);
  });

  return card;
}

/* ============================================================
   BEST SELLERS
   ============================================================ */
const grid = document.getElementById('bestSellers');
products.filter(p => bestSellerIds.includes(p.id)).forEach((p, i) => {
  const c = buildCard(p);
  c.style.animationDelay = `${i * 70}ms`;
  grid.appendChild(c);
});

/* ============================================================
   CARROUSELS PAR CATÉGORIE
   ============================================================ */
const catContent = document.getElementById('catContent');
let activeCarousels = {};

function CARD_W() {
  const w = window.innerWidth;
  if (w >= 1280) return 260 + 20;
  if (w >= 1024) return 240 + 20;
  if (w >= 640)  return 210 + 16;
  if (w >= 400)  return 170 + 14;
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

  items.forEach((_, i) => {
    const d = document.createElement('span');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => carouselGoTo(key, i));
    dots.appendChild(d);
  });

  section.querySelectorAll('.row-btn').forEach(btn => {
    btn.addEventListener('click', () => carouselGoTo(key, activeCarousels[key].index + parseInt(btn.dataset.dir)));
  });

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

document.querySelectorAll('.cat-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderCategory(tab.dataset.cat);
  });
});
renderCategory('femme');

window.addEventListener('resize', () => {
  Object.keys(activeCarousels).forEach(key => carouselGoTo(key, activeCarousels[key].index));
});

function initSwipe(key, wrap) {
  let startX = 0, dragging = false, moved = false;
  wrap.addEventListener('touchstart', e => { startX = e.touches[0].clientX; dragging = true; moved = false; }, { passive: true });
  wrap.addEventListener('touchmove',  e => { if (!dragging) return; if (Math.abs(e.touches[0].clientX - startX) > 8) { moved = true; e.preventDefault(); } }, { passive: false });
  wrap.addEventListener('touchend',   e => {
    if (!dragging || !moved) { dragging = false; return; }
    dragging = false;
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) carouselGoTo(key, activeCarousels[key].index + (diff > 0 ? 1 : -1));
  });
  wrap.addEventListener('mousedown',  e => { startX = e.clientX; dragging = true; moved = false; });
  wrap.addEventListener('mousemove',  e => { if (dragging && Math.abs(e.clientX - startX) > 5) moved = true; });
  wrap.addEventListener('mouseup',    e => {
    if (!dragging || !moved) { dragging = false; return; }
    dragging = false;
    const diff = startX - e.clientX;
    if (Math.abs(diff) > 40) carouselGoTo(key, activeCarousels[key].index + (diff > 0 ? 1 : -1));
  });
  wrap.addEventListener('mouseleave', () => { dragging = false; });
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
   MODAL DÉTAIL ARTICLE
   ============================================================ */
const modalOverlay = document.getElementById('modalOverlay');
const modalClose   = document.getElementById('modalClose');
let   currentProduct = null;

function openModal(product) {
  currentProduct = product;
  const mediaHtml = product.img
    ? `<img src="${product.img}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;border-radius:16px;">`
    : product.svg;
  document.getElementById('modalImg').innerHTML    = mediaHtml;
  document.getElementById('modalCat').textContent  = product.cat.charAt(0).toUpperCase() + product.cat.slice(1);
  document.getElementById('modalTitle').textContent = product.name;
  document.getElementById('modalDesc').textContent  = product.desc;
  document.getElementById('modalPrice').textContent = product.price;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
  currentProduct = null;
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

document.getElementById('modalAddCart').addEventListener('click', () => {
  if (currentProduct) addToCart(currentProduct);
});

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
   REVEAL ANIMATIONS
   ============================================================ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.1 });

function observeReveals() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}
observeReveals();

// Init panier
updateCartUI();
