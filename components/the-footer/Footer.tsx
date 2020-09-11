import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.appFooter}>
      &copy; {new Date().getFullYear()} <a
        href="https://sallai.me"
        target="_blank"
        rel="noopener noreferrer"
      >
        József Sallai
      </a>.
    </footer>
  );
};

export default Footer;
