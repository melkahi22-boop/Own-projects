const pages = [...document.querySelectorAll('.page')];
function showPage() {
  const requested = location.hash.slice(1) || 'home';
  const current = pages.some(page => page.id === requested) ? requested : 'home';
  for (const page of pages) page.hidden = page.id !== current;
  for (const link of document.querySelectorAll('nav a')) {
    if (link.hash === `#${current}`) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  const titles = { home: 'Home', portfolio: 'Products portfolio', 'case-studies': 'Product explorations', services: 'Services', recommendations: 'Recommendations', contact: 'Contacts' };
  document.title = `${titles[current]} · Melinda Kahi · Senior PM`;
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', showPage);
showPage();
