module.exports = {
  ci: {
    collect: {
      url: [
        'http://127.0.0.1:8080/',
        'http://127.0.0.1:8080/json/formatter',
        'http://127.0.0.1:8080/text/word-counter',
        'http://127.0.0.1:8080/pdf/merge',
        'http://127.0.0.1:8080/image/resize',
        'http://127.0.0.1:8080/generate/fake-data',
        'http://127.0.0.1:8080/crypto/hash'
      ],
      numberOfRuns: 1
    },
    assert: {
      assertions: {
        'categories:performance': ['error', {minScore: 0.95}],
        'categories:accessibility': ['error', {minScore: 0.95}],
        'categories:seo': ['error', {minScore: 0.95}]
      }
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
