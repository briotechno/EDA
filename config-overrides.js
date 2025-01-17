module.exports = function override(config, env) {
  // Modify Webpack config to add the fallback
  config.resolve.fallback = {
    crypto: false, // Tell Webpack to ignore the 'crypto' module
  };

  return config;
};
