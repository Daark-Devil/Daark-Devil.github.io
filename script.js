document.body.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
if (menu && navigation) {
  const closeMenu = () => { menu.setAttribute('aria-expanded', 'false'); navigation.classList.remove('is-open'); };
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); }
  });
}

document.querySelectorAll('[data-gallery]').forEach(gallery => {
  const slides = Array.from(gallery.querySelectorAll('.gallery-slide'));
  const controls = gallery.querySelector('.gallery-controls');
  const count = gallery.querySelector('.gallery-count');
  if (!slides.length) return;
  let index = 0;
  const show = value => {
    index = (value + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.hidden = i !== index; });
    count.textContent = `${index + 1} / ${slides.length}`;
  };
  gallery.classList.add('gallery-ready');
  if (slides.length > 1) {
    controls.hidden = false;
    gallery.querySelectorAll('[data-direction]').forEach(button => {
      button.addEventListener('click', () => show(index + Number(button.dataset.direction)));
    });
    gallery.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        show(index + (event.key === 'ArrowRight' ? 1 : -1));
      }
    });
    let touchStart = null;
    gallery.addEventListener('pointerdown', event => {
      if (event.pointerType === 'touch') touchStart = {x:event.clientX,y:event.clientY};
    });
    gallery.addEventListener('pointercancel', () => { touchStart = null; });
    gallery.addEventListener('pointerup', event => {
      if (!touchStart) return;
      const dx = event.clientX - touchStart.x, dy = event.clientY - touchStart.y;
      touchStart = null;
      if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) show(index + (dx < 0 ? 1 : -1));
    });
  }
  show(0);
});
