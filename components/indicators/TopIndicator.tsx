import styles from './TopIndicator.module.scss';

const TopIndicator = ({ width }: { width: string }) => {
  return <div className={styles.indicator} style={{ width }} />;
};

export default TopIndicator;
