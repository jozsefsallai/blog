import Twemoji from 'react-twemoji';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@/components/renderers/CodeBlock';
import MarkdownImage from '@/components/renderers/MarkdownImage';
import TextRenderer from '../renderers/TextRenderer';

const renderers = {
  code: CodeBlock,
  image: MarkdownImage,
  text: TextRenderer
};

const PostContent = ({ content }: { content: string }) => {
  return (
    <Twemoji
      options={{ className: 'twemoji' }}
    >
      <ReactMarkdown
        escapeHtml={false}
        source={content}
        renderers={renderers}
      />
    </Twemoji>
  );
};

export default PostContent;
