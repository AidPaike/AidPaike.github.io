(function () {
  'use strict';

  const header = document.querySelector('[data-site-header]');
  const menuButton = document.querySelector('[data-menu-button]');
  const navigation = document.querySelector('[data-navigation]');
  const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));
  const sections = Array.from(document.querySelectorAll('[data-section]'));

  function setMenu(open) {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  }

  if (menuButton && navigation) {
    menuButton.addEventListener('click', function () {
      setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        setMenu(false);
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setMenu(false);
        menuButton.focus();
      }
    });

    document.addEventListener('click', function (event) {
      if (!navigation.contains(event.target) && !menuButton.contains(event.target)) {
        setMenu(false);
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 820) setMenu(false);
    });
  }

  function updateHeader() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 12);
  }

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if ('IntersectionObserver' in window && sections.length) {
    const sectionObserver = new IntersectionObserver(function (entries) {
      const visible = entries
        .filter(function (entry) { return entry.isIntersecting; })
        .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });

      if (!visible.length) return;
      const activeId = '#' + visible[0].target.id;

      navLinks.forEach(function (link) {
        const active = link.getAttribute('href') === activeId;
        link.classList.toggle('is-active', active);
        if (active) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }, {
      rootMargin: '-24% 0px -58% 0px',
      threshold: [0, 0.2, 0.55]
    });

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }
}());
