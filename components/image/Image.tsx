import styles from './Image.module.scss';

import clsx from 'clsx';
import 'lazysizes';

export interface ImageProps {
  src: string;
  alt?: string;
  preview: string;
  className?: string;
  width?: number;
}

const Image = ({ src, alt, preview, className, width }: ImageProps) => {
  return (
    <img
      className={clsx('lazyload', styles.blur, className)}
      alt={alt}
      src={preview}
      data-srcset={src}
      width={width}
    />
  );
};

export default Image;
