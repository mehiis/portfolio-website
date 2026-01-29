export default {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: ['/~nikomeh/portfolio/index.html'],
    },

    assert: {
      preset: 'lighthouse:recommended',
    },

    upload: {
        target: 'temporary-public-storage',
      },
  },
};
