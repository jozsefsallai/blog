const theme = localStorage.getItem('theme');

if (theme) {
  document.documentElement.className = theme;
}
