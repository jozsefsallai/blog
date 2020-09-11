import Image from '../image/Image';

const MarkdownImage = ({ alt, src }: { alt: string; src: string }) => {
  return (
    <Image
      alt={alt}
      src={require(`../../posts/images/${src.replace('images/', '')}`)}
      preview={require(`../../posts/images/${src.replace('images/', '')}?lqip`)}
    />
  );
};

export default MarkdownImage;
