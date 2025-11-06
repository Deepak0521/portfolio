const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn && menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
  if (nav.classList.contains('open')) {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.right = '20px';
    nav.style.top = '64px';
    nav.style.background = 'rgba(11,13,16,0.9)';
    nav.style.padding = '12px';
    nav.style.borderRadius = '10px';
  } else {
    nav.style.display = '';
    nav.style.flexDirection = '';
    nav.style.position = '';
    nav.style.right = '';
    nav.style.top = '';
    nav.style.background = '';
    nav.style.padding = '';
  }
});

document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
    link.classList.add('active');
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
      nav.style.display = '';
    }
  });
});

const skillBars = document.querySelectorAll('.bar div');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const w = el.getAttribute('data-width') || '70%';
      el.style.width = w;
      observer.unobserve(el);
    }
  });
}, { threshold: 0.25 });

skillBars.forEach(bar => observer.observe(bar));

function handleContactSubmit(e){
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
 
  const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
  window.location.href = `mailto:deepaksnaidu.21@gmail.com?subject=${subject}&body=${body}`;
  return false;
}

document.addEventListener('keyup', (e) => {
  if (e.key === 'Tab') document.body.classList.add('user-tabbing');
});
