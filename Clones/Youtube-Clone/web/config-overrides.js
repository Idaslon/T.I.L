/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

const baseUrl = path.resolve(__dirname, 'src');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      '~': path.resolve(baseUrl),
    },
  };

  return config;
};
