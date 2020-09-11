import styles from './Image.module.scss';

import clsx from 'clsx';
import 'lazysizes';

export interface ImageProps {
  src: string;
  alt?: string;
  preview: string;
  className?: string;
}

const Image = ({ src, alt, preview, className }: ImageProps) => {
  return (
    <img
      className={clsx('lazyload', styles.blur, className)}
      alt={alt}
      src={preview}
      data-srcset={src}
    />
  );
};

export default Image;
