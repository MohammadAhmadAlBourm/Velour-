document.getElementById('year').textContent = new Date().getFullYear();

const obs = new IntersectionObserver(entries =>
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.08 }
);
document.querySelectorAll('.reveal, .fade-only').forEach(el => obs.observe(el));