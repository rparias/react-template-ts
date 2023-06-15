const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    // overwrites configuration to add polyfills for msw browser, only for development
    configure: (webpackConfig) => {
      const fallback = webpackConfig.resolve.fallback || {};
      Object.assign(fallback, {
        assert: require.resolve("assert"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        stream: require.resolve("stream-browserify"),
        timers: require.resolve("timers-browserify"),
        url: require.resolve("url"),
        zlib: require.resolve("browserify-zlib")
      });
      webpackConfig.resolve.fallback = fallback;
      return webpackConfig;
    }
  }
};
