import 'styles/base.scss';
import rpi from 'reading-position-indicator';

window.onload = function () {
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
        color: 'rgba(23, 62, 134, .5)',
        displayBeforeScroll: true
      }
    }).init();
  }

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
};
