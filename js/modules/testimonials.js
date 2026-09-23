/** Initialize the testimonials carousel. Native scrolling also supports touch/trackpads. */
export function initTestimonials(root = document) {
  const cleanups = [];

  root.querySelectorAll('.testimonials').forEach((section, index) => {
    const track = section.querySelector('.testimonials__track');
    const previous = section.querySelector('.testimonials__control--prev');
    const next = section.querySelector('.testimonials__control--next');
    if (!track || !previous || !next || track.dataset.carouselReady) return;

    track.dataset.carouselReady = 'true';
    track.id ||= `testimonials-track-${index + 1}`;
    track.tabIndex = 0;
    track.setAttribute('role', 'region');
    track.setAttribute('aria-label', 'Client testimonials');
    previous.setAttribute('aria-controls', track.id);
    next.setAttribute('aria-controls', track.id);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const maximum = () => Math.max(0, track.scrollWidth - track.clientWidth);
    const update = () => {
      previous.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= maximum() - 2;
    };

    const move = (direction) => {
      const left = track.getBoundingClientRect().left;
      const positions = [...track.children].map((card) =>
        Math.min(maximum(), Math.max(0,
          card.getBoundingClientRect().left - left + track.scrollLeft)));
      const destination = direction > 0
        ? positions.find((position) => position > track.scrollLeft + 2) ?? maximum()
        : positions.reverse().find((position) => position < track.scrollLeft - 2) ?? 0;
      track.scrollTo({ left: destination, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    };

    const onPrevious = () => move(-1);
    const onNext = () => move(1);
    const onKeydown = (event) => {
      if (event.target !== track || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        move(event.key === 'ArrowRight' ? 1 : -1);
      } else {
        track.scrollTo({ left: event.key === 'Home' ? 0 : maximum(), behavior: reducedMotion.matches ? 'instant' : 'smooth' });
      }
    };

    previous.addEventListener('click', onPrevious);
    next.addEventListener('click', onNext);
    track.addEventListener('scroll', update, { passive: true });
    track.addEventListener('keydown', onKeydown);
    const observer = new ResizeObserver(update);
    observer.observe(track);
    [...track.children].forEach((card) => observer.observe(card));
    update();

    cleanups.push(() => {
      previous.removeEventListener('click', onPrevious);
      next.removeEventListener('click', onNext);
      track.removeEventListener('scroll', update);
      track.removeEventListener('keydown', onKeydown);
      observer.disconnect();
      delete track.dataset.carouselReady;
    });
  });

  return () => cleanups.forEach((cleanup) => cleanup());
}
