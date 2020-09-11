import clsx from 'clsx';
import { useState } from 'react';
import PostContent from '../posts/PostContent';
import styles from './Spoiler.module.scss';

const SpoilerBlock = ({ text }: { text: string }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div
      className={clsx({
        [`${styles.spoiler}`]: true,
        [`${styles.block}`]: true,
        [`${styles.opened}`]: opened
      })}
      onClick={() => setOpened(true)}
      title="Spoiler! Click to reveal."
    >
      <span className={styles.content}>
        <PostContent content={text} />
      </span>
    </div>
  );
};

export default SpoilerBlock;
