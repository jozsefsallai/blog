import styles from './Sharebox.module.scss';

import buildUrl from '@/lib/buildUrl';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface ShareboxProps {
  url: string;
  title: string;
}

const buildFacebookUrl = (url: string): string => {
  return `https://www.facebook.com/sharer/sharer.php?u=${buildUrl(url)}`;
};

const buildTwitterUrl = (url: string, title: string): string => {
  title = `"${title}" by @jozsefsallaidev`;
  return `https://twitter.com/intent/tweet?text=${title} — ${buildUrl(url)}`;
};

const buildLinkedinUrl = (url: string, title: string): string => {
  const params = [
    `mini=true`,
    `url=${buildUrl(url)}`,
    `title=${encodeURIComponent(title)}`,
    `summary=Joe's Blog`,
    `source=${buildUrl()}`
  ].join('&');

  return `https://www.linkedin.com/shareArticle?${params}`;
};

const Sharebox = ({ url, title }: ShareboxProps) => {
  return (
    <section className={styles.sharing}>
      <h2 className={styles.title}>Thanks for reading!</h2>
      <p>
        Hope you enjoyed this article! If you liked it, you can share it on your social media for more people to enjoy. Sharing is caring!
      </p>

      <div className={styles.buttons}>
        <a
          href={buildFacebookUrl(url)}
          className={styles.facebook}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={faFacebookF} />
          <span>Share</span>
        </a>

        <a
          href={buildTwitterUrl(url, title)}
          className={styles.twitter}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={faTwitter} />
          <span>Tweet</span>
        </a>

        <a
          href={buildLinkedinUrl(url, title)}
          className={styles.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
          <span>Share</span>
        </a>
      </div>
    </section>
  );
};

export default Sharebox;
