const twemoji = require('twemoji');

hexo.extend.helper.register('twemoji', (str) => {
  return twemoji.parse(str);
});
