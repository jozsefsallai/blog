const path = require('path');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins(
  [ optimizedImages ],
  {
    sassOptions: {
      includePaths: [
        path.join(__dirname, 'styles')
      ]
    },
    webpack(config) {
      config.module.rules = config.module.rules.map(rule => {
        if (rule.test && rule.test.toString() === '/\\.(jpe?g|png|svg|gif)$/i') {
          const last = rule.oneOf.pop();

          rule.oneOf.push({
            resourceQuery: /meta/,
            use: [
              {
                loader: '@lesechos/image-size-loader'
              }
            ]
          }, last);
        }

        return rule;
      });

      return config;
    }
  }
);
