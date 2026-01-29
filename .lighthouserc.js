export default {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: ['http://localhost:36805/index.html'],
    },

    assert: {
      preset: 'lighthouse:recommended',
    },

    upload: {
        target: 'temporary-public-storage',
      },
  },
};
