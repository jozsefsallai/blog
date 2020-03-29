import 'styles/base.scss';
import rpi from 'reading-position-indicator';

const colorModeSwitcher = document.querySelector('#color-mode-switcher');

window.onload = function () {
  const theme = localStorage.getItem('theme');

  if (theme) {
    const colorModeIcon = colorModeSwitcher.querySelector('i');
    const newIcon = theme === 'dark-mode' ? 'fa-sun-o' : 'fa-moon-o';
    colorModeIcon.classList.remove('fa-sun-o', 'fa-moon-o');
    colorModeIcon.classList.add(newIcon);
  }

  const rpiColor = theme === 'light-mode'
    ? 'rgba(23, 62, 134, .5)'
    : 'rgba(245, 186, 35, .85)';

  // Estimate reading time and reading position indicator
  const readingTimeElement = document.querySelector('.reading-time');

  if (readingTimeElement) {
    const text = document.querySelector('.post-content').textContent;
    const words = text ? text.split(' ').length : 0;

    const minutes = Math.ceil(words / 200);

    readingTimeElement.querySelector('span').innerHTML = minutes === 1
      ? `${minutes} minute`
      : `${minutes} minutes`;

    new rpi({
      rpiArea: '.blog-content',
      progressBar: {
        show: true,
        color: rpiColor,
        displayBeforeScroll: true
      }
    }).init();
  }

  // Menu active state
  const pathComponents = window.location.pathname.split('/');
  if (pathComponents[1] === 'categories') {
    const category = pathComponents[2];
    const categoryMenuItems = document.querySelectorAll('.site-categories > a');

    categoryMenuItems.forEach(item => {
      if (item.innerHTML === category) {
        item.classList.add('active');
      }
    });
  }

  // Spoiler tags
  const spoilerTags = document.querySelectorAll('.spoiler');
  spoilerTags.forEach(spoiler => {
    spoiler.onclick = function () {
      if (!this.classList.contains('opened')) {
        this.classList.add('opened');
      }
    }
  });
};

colorModeSwitcher.onclick = function () {
  const html = document.documentElement;
  const icon = colorModeSwitcher.querySelector('i');

  if (html.classList.contains('light-mode')) {
    html.classList.replace('light-mode', 'dark-mode');
    localStorage.setItem('theme', 'dark-mode');
    icon.classList.replace('fa-moon-o', 'fa-sun-o');
  } else {
    html.classList.replace('dark-mode', 'light-mode');
    localStorage.setItem('theme', 'light-mode');
    icon.classList.replace('fa-sun-o', 'fa-moon-o');
  }
};
