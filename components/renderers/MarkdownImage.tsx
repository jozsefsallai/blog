import Image from '../image/Image';

const MarkdownImage = ({ alt, src }: { alt: string; src: string }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Image
        alt={alt}
        src={require(`../../posts/images/${src.replace('images/', '')}`)}
        preview={require(`../../posts/images/${src.replace('images/', '')}?lqip`)}
      />
    </div>
  );
};

export default MarkdownImage;
