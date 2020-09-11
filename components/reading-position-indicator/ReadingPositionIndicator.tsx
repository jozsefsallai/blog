import { useEffect, useState } from 'react';
import styles from './ReadingPositionIndicator.module.scss';

const ReadingPositionIndicator = ({ target }) => {
  const [ progress, setProgress ] = useState(0);

  const listener = () => {
    if (!target.current || typeof window === 'undefined') {
      return;
    }

    const element: HTMLElement = target.current;
    const totalHeight = element.clientHeight - element.offsetTop - window.innerHeight;
    const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (windowScrollTop === 0) {
      return setProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      return setProgress(100);
    }

    return setProgress((windowScrollTop / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, []);

  return <div className={styles.rpi} style={{ width: `${progress}%` }} />;
};

export default ReadingPositionIndicator;
