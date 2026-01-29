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
    },

    upload: {
        target: 'temporary-public-storage',
      },
  },
};
