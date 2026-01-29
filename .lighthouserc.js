export default {
  ci: {
    collect: {
      // Jos sinulla on staattinen sivusto (esim. build-kansio)
      staticDistDir: './dist',
      // Tai jos haluat testata livenä olevaa URL-osoitetta:
      // url: ['https://sinunportfoliosi.fi'],
    },
    assert: {
      assertions: {
        // Tässä asetetaan kriteerit. 'error' pysäyttää CI-putken.
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'temporary-public-storage', // Tallentaa raportin väliaikaisesti pilveen katsottavaksi
    },
  },
};
