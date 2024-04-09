// build.js
const StyleDictionary = require('style-dictionary');

const myStyleDictionary = StyleDictionary.extend({
  source: ['src/tokens/**/*.json'],
    platforms: {
      scss: {
        transformGroup: 'css',
        buildPath: 'src/css/',
        files: [{
          destination: '_variables.scss',
          format: 'css/variables'
        }]
      }
    }});

myStyleDictionary.buildAllPlatforms();

// You can also extend Style Dictionary multiple times:
const myOtherStyleDictionary = myStyleDictionary.extend({
  // new configuration
});

myOtherStyleDictionary.buildAllPlatforms();