import replace from 'react-string-replace';
import Spoiler from '../spoiler/Spoiler';

const TextRenderer = ({ children }) => {
  const modifiedSource = replace(children, /\|\|(.*?)\|\|/g, (match, idx) => {
    return <Spoiler text={match} key={idx} />;
  });

  return (
    <>
      {modifiedSource}
    </>
  );
};

export default TextRenderer;
