/** Mobile disclosure navigation; desktop links remain ordinary navigation. */
export function initNavbar(root = document) {
  const nav = root.querySelector('.navbar');
  const toggle = nav?.querySelector('.navbar__toggle');
  const menu = nav?.querySelector('.navbar__menu');
  if (!nav || !toggle || !menu || nav.dataset.navReady) return;
  nav.dataset.navReady = 'true';
  const mobile = window.matchMedia('(max-width: 768px)');
  const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open && mobile.matches));
    toggle.setAttribute('aria-label', open && mobile.matches ? 'Close navigation menu' : 'Open navigation menu');
    nav.classList.toggle('navbar--open', open && mobile.matches);
  };
  toggle.addEventListener('click', () => setOpen(!isOpen()));
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      setOpen(false);
      if (mobile.matches) toggle.focus({ preventScroll: true });
    }
  });
  nav.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      event.preventDefault();
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) setOpen(false);
  });
  nav.addEventListener('focusout', (event) => {
    if (!nav.contains(event.relatedTarget)) setOpen(false);
  });
  mobile.addEventListener('change', () => {
    const focused = document.activeElement;
    // Do not leave keyboard focus on an element hidden by the new layout.
    if (mobile.matches && (menu.contains(focused) || focused?.matches('.navbar__cta'))) toggle.focus();
    if (!mobile.matches && focused === toggle) menu.querySelector('a')?.focus();
    setOpen(false);
  });
  setOpen(false);
}
