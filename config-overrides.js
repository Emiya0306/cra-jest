const { override, addDecoratorsLegacy, addLessLoader } = require('customize-cra');

module.exports = override(
  addDecoratorsLegacy(),
  addLessLoader(),
);
