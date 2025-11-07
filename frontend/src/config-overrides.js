const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@pages': 'src/pages',
    '@user': 'src/user',
    '@mitra': 'src/mitra',
    '@assets': 'src/assets'
  })(config);

  return config;
};
