(() => {
  const refs = {
    themeSwitch: document.querySelector('[data-theme-switch]'),
    page: document.querySelector('[data-page]'),
  };

  refs.themeSwitch.addEventListener('click', toggleSwitch);

  function toggleSwitch() {
    refs.page.classList.toggle('theme-light');
    refs.page.classList.toggle('theme-dark');
  }
})();
