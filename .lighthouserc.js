export default {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: ['/'],
      settings: {
        chromeFlags: '--no-sandbox --disable-dev-shm-usage --headless',
      },
    },

    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
      'csp-xss': 'off',
      'installable-manifest': 'off',
      'uses-http2': 'off',
  },
    },

    upload: {
        target: 'temporary-public-storage',
      },
  },
};
