const pages = [...document.querySelectorAll('.page')];
function showPage() {
  const requested = location.hash.slice(1) || 'home';
  const current = pages.some(page => page.id === requested) ? requested : 'home';
  for (const page of pages) page.hidden = page.id !== current;
  for (const link of document.querySelectorAll('nav a')) {
    if (link.hash === `#${current}`) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  const titles = { home: 'Home', portfolio: 'Products portfolio', services: 'Services', contact: 'Contacts' };
  document.title = `${titles[current]} · Melinda Kahi · Senior PM`;
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', showPage);
showPage();
const photo = document.querySelector('#profile-photo');
const artwork = document.querySelector('.portrait-art');
const toast = document.querySelector('#toast');
let toastTimer;
function notify(message) {
  toast.textContent = message;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.textContent = ''; }, 6000);
}
function displayPhoto(source) {
  photo.src = source;
  photo.hidden = false;
  artwork.hidden = true;
  document.querySelector('.photo-control').innerHTML = '<span aria-hidden="true">＋</span> Change photo';
}
try { const saved = localStorage.getItem('pm-portfolio-photo'); if (saved) displayPhoto(saved); } catch { /* Storage is optional. */ }
document.querySelector('#photo-upload').addEventListener('change', event => {
  const file = event.target.files[0];
  if (!file) return;
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) return notify('Choose a JPG, PNG, or WebP image.');
  if (file.size > 5 * 1024 * 1024) return notify('Please choose an image smaller than 5 MB.');
  const reader = new FileReader();
  reader.onerror = () => notify('The photo could not be read. Please try another image.');
  reader.onload = () => {
    const image = new Image();
    image.onerror = () => notify('This image could not be opened. Please choose another photo.');
    image.onload = () => {
      const scale = Math.min(1, 1000 / Math.max(image.width, image.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(image.width * scale));
      canvas.height = Math.max(1, Math.round(image.height * scale));
      canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
      const source = canvas.toDataURL('image/jpeg', .85);
      displayPhoto(source);
      try { localStorage.setItem('pm-portfolio-photo', source); notify('Photo saved in this browser. Publishing it for all visitors requires adding it to the website files.'); }
      catch { notify('Photo preview added. Your browser could not save it for future visits.'); }
    };
    image.src = reader.result;
  };
  reader.readAsDataURL(file);
});
