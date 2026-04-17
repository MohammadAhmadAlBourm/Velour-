document.getElementById('year').textContent = new Date().getFullYear();

/* ── INTERSECTION OBSERVER (scroll reveals) ── */
const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.08 }
);
document.querySelectorAll('.reveal, .fade-only').forEach(el => obs.observe(el));

/* ── LANGUAGE SWITCHER ── */
function setLanguage(lang) {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update all translatable elements
    document.querySelectorAll('[data-ar][data-en]').forEach(el => {
        el.innerHTML = el.dataset[lang];
    });

    // Page title
    document.title = lang === 'ar'
        ? 'فيلوريه — ارتدِ عبق الفخامة'
        : 'Velouré — Wear the Essence of Luxury';

    // Toggle button label (always opposite of current)
    const btn = document.getElementById('lang-toggle');
    btn.textContent = lang === 'ar' ? 'EN' : 'عر';
    btn.dataset.current = lang;

    // Persist choice
    try { localStorage.setItem('velour-lang', lang); } catch (e) { }
}

document.getElementById('lang-toggle').addEventListener('click', function () {
    const next = this.dataset.current === 'ar' ? 'en' : 'ar';
    setLanguage(next);
});

// Init — default Arabic, override if user previously chose English
(function () {
    let saved = 'ar';
    try { saved = localStorage.getItem('velour-lang') || 'ar'; } catch (e) { }
    setLanguage(saved);
})();