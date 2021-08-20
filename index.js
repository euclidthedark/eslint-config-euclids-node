module.exports = {
  "env": {
    "node": true,
    "commonjs": true,
    "es6": true
  },
  "plugins": [
    "mocha",
    "chai-friendly"
  ],
  "extends": [
    "airbnb-base",
    "plugin:mocha/recommended",
    "plugin:chai-friendly/recommended"
  ],
};
