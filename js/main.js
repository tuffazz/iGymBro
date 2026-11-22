/* iGymBro Promo — Main JS */

/* ---- i18n ---- */
let currentLang = 'en';

function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) ||
         (TRANSLATIONS['en'] && TRANSLATIONS['en'][key]) || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = t(key);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });
  // Update page title if key provided
  const titleKey = document.querySelector('[data-i18n-title]');
  if (titleKey) document.title = t(titleKey.getAttribute('data-i18n-title'));
  // Update html lang attribute
  const langMap = { en:'en', bg:'bg', de:'de', es:'es', fr:'fr', hi:'hi', it:'it', ja:'ja', ru:'ru', zh:'zh-Hans' };
  document.documentElement.lang = langMap[currentLang] || currentLang;
}

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  applyTranslations();
  localStorage.setItem('itu_lang', lang);
}

/* ---- Navbar scroll effect ---- */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ---- Language picker ---- */
const picker = document.getElementById('langPicker');
if (picker) {
  picker.addEventListener('change', e => setLang(e.target.value));
}

/* ---- Carousel ---- */
let currentSlide = 0;
const SLIDE_COUNT = 5;

function goToSlide(n) {
  currentSlide = ((n % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT;
  const track = document.getElementById('carouselTrack');
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  const slideWidth = 270 + 24; // frame width + gap

  if (track) {
    // Center the active slide
    const offset = currentSlide * slideWidth;
    track.style.transform = `translateX(-${offset}px)`;
  }

  slides.forEach((s, i) => s.classList.toggle('active', i === currentSlide));
  dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
}

document.getElementById('prevSlide')?.addEventListener('click', () => goToSlide(currentSlide - 1));
document.getElementById('nextSlide')?.addEventListener('click', () => goToSlide(currentSlide + 1));
document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
  dot.addEventListener('click', () => goToSlide(i));
});

// Touch/swipe for carousel
let touchStartX = 0;
const carouselOuter = document.querySelector('.carousel-track-outer');
if (carouselOuter) {
  carouselOuter.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  carouselOuter.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) goToSlide(dx < 0 ? currentSlide + 1 : currentSlide - 1);
  }, { passive: true });
}

// Auto-advance carousel
let carouselTimer = setInterval(() => goToSlide(currentSlide + 1), 4000);
carouselOuter?.addEventListener('mouseenter', () => clearInterval(carouselTimer));
carouselOuter?.addEventListener('mouseleave', () => {
  clearInterval(carouselTimer);
  carouselTimer = setInterval(() => goToSlide(currentSlide + 1), 4000);
});

/* ---- Scroll reveal ---- */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); } });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('itu_lang');
  const browserLang = navigator.language.split('-')[0];
  const startLang = (saved && TRANSLATIONS[saved]) ? saved :
                    (TRANSLATIONS[browserLang] ? browserLang : 'en');

  if (picker) picker.value = startLang;
  setLang(startLang);
  goToSlide(0);
});
