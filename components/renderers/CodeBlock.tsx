import SyntaxHighlighter from 'react-syntax-highlighter';
import SpoilerBlock from '../spoiler/SpoilerBlock';

const CodeBlock = ({ language, value }) => {
  if (language === 'spoiler') {
    return <SpoilerBlock text={value} />;
  }

  return <SyntaxHighlighter language={language} useInlineStyles={false}>{value}</SyntaxHighlighter>;
};

export default CodeBlock;
