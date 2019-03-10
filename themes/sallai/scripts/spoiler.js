const spoilerize = (str, tag) => {
  return `<${tag} class="spoiler" title="Spoiler! Click to reveal."><${tag} class="spoiler-content">${str}</${tag}></${tag}>`;
}

hexo.extend.tag.register('spoiler', args => {
  const str = hexo
    .render.renderSync({ text: args.join(' '), engine: 'markdown' })
    .substr(3, args.join(' ').length);

  return spoilerize(str, 'span');
});

hexo.extend.tag.register('spoilerblock', (args, content) => {
  const str = hexo.render.renderSync({ text: content, engine: 'markdown' });
  return spoilerize(str, 'div');
}, { ends: true });
