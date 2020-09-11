import styles from './ColorModeSwitcher.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const ColorModeSwitcher = () => {
  const [theme, setTheme] = useState('light-mode');

  useEffect(() => {
    const actualTheme = localStorage.getItem('theme');

    if (actualTheme) {
      setTheme(actualTheme);
    }
  }, []);

  const updateTheme = () => {
    const newTheme = theme === 'light-mode' ? 'dark-mode' : 'light-mode';
    document.documentElement.classList.replace(theme, newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <div className={styles.cms} onClick={updateTheme}>
      <FontAwesomeIcon icon={theme === 'light-mode' ? faMoon : faSun } />
    </div>
  );
};

export default ColorModeSwitcher;
