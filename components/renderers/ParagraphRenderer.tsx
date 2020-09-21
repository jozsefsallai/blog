const ParagraphRenderer = props => {
  const element = props.children[0];
  return element.type.name === 'MarkdownImage'
    ? { ...element }
    : <p {...props} />;
};

export default ParagraphRenderer;
