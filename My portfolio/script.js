// Smooth scroll for nav links
for (const a of document.querySelectorAll('a[href^="#"]')){
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href.startsWith('#')){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  })
}

// Contact form -> opens email client
function handleContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent('Portfolio Contact from ' + name);
  const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
  const mailto = `mailto:sanambibikhonbati@gmail.com?subject=${subject}&body=${body}`;
  window.location.href = mailto;
  document.getElementById('formMsg').textContent = 'Your mail client should open. If not, email: sanambibikhonbati@gmail.com';
}

// Keyboard focus for project cards
for (const p of document.querySelectorAll('.project')){
  p.setAttribute('tabindex','0');
  p.addEventListener('keydown', e=>{ if(e.key==='Enter'){ const firstLink = p.querySelector('a'); if(firstLink) window.open(firstLink.href, '_blank'); }})
}

// Scroll reveal using IntersectionObserver
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  })
},{threshold:0.14});

for (const el of document.querySelectorAll('.reveal')) io.observe(el);
function toggleMenu(){
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active'); // menu open/close
}
document.querySelectorAll('.menu a').forEach(a => {
  a.addEventListener('click', () => {
    document.querySelector('.menu').classList.remove('active');
  });
});

