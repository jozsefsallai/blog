import Image from '../image/Image';

const MarkdownImage = ({ alt, src }: { alt: string; src: string }) => {
  src = src.replace('images/', '');
  const meta = require(`../../posts/images/${src}?meta`);

  return (
    <div style={{ textAlign: 'center' }}>
      <Image
        alt={alt}
        src={require(`../../posts/images/${src}`)}
        preview={require(`../../posts/images/${src}?lqip`)}
        width={meta.width}
      />
    </div>
  );
};

export default MarkdownImage;
