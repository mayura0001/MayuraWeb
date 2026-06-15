/* ── TYPEWRITER ──────────────────────────────────────────── */
const phrases = [
'ML & Python Enthusiast',
'Building AI Projects',
'Data-Driven App Developer',
'GCP ML Engineer in Training',
'Open to Collaboration'
];
let pi = 0, ci = 0, deleting = false;
const el = document.getElementById('typewriter');

function type() {
const current = phrases[pi];
if (deleting) {
    el.textContent = current.slice(0, --ci);
} else {
    el.textContent = current.slice(0, ++ci);
}

let delay = deleting ? 40 : 80;
if (!deleting && ci === current.length) { delay = 2000; deleting = true; }
else if (deleting && ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; delay = 400; }
setTimeout(type, delay);
}
setTimeout(type, 1200);

/* ── SCROLL REVEAL ───────────────────────────────────────── */
const observer = new IntersectionObserver(entries => {
entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── MOBILE NAV ──────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
hamburger.classList.toggle('open');
mobileMenu.classList.toggle('open');
});
function closeMobile() {
hamburger.classList.remove('open');
mobileMenu.classList.remove('open');
}

/* ── CONTACT FORM ────────────────────────────────────────── */
function handleSend() {
const name    = document.getElementById('name').value.trim();
const email   = document.getElementById('email').value.trim();
const message = document.getElementById('message').value.trim();
if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
}
const toast = document.getElementById('toast');
toast.classList.add('show');
document.getElementById('name').value = '';
document.getElementById('email').value = '';
document.getElementById('message').value = '';
setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ── ACTIVE NAV HIGHLIGHT ────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
let current = '';
sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
});
navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--text)' : '';
});
});
