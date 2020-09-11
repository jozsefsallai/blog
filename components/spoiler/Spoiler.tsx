import clsx from 'clsx';
import { useState } from 'react';
import styles from './Spoiler.module.scss';

const Spoiler = ({ text }: { text: string }) => {
  const [opened, setOpened] = useState(false);

  return (
    <span
      className={clsx({ [`${styles.spoiler}`]: true, [`${styles.opened}`]: opened })}
      onClick={() => setOpened(true)}
      title="Spoiler! Click to reveal."
    >
      <span className={styles.content}>
        {text}
      </span>
    </span>
  );
};

export default Spoiler;
