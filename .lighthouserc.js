export default {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: ['/'],
    },

    assert: {
      preset: 'lighthouse:recommended',
    },

    upload: {
        target: 'temporary-public-storage',
      },
  },
};
