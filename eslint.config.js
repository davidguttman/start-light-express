export default [{
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended'
  ],
  plugins: [
    'no-unsanitized'
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  rules: {
    // Prevent innerHTML and other unsafe DOM manipulation
    'no-unsanitized/property': ['error', {
      'escape': {
        'taggedTemplates': ['html', 'css', 'styled']
      }
    }],
    'no-unsanitized/method': 'error',
    
    // Additional DOM safety rules
    'no-eval': 'error',
    'no-implied-eval': 'error',
    
    // Disallow direct innerHTML assignment (our custom rule)
    'no-restricted-properties': ['error', {
      'object': 'document',
      'property': 'innerHTML',
      'message': 'Use nanohtml instead of innerHTML for DOM manipulation'
    }, {
      'property': 'innerHTML',
      'message': 'Use nanohtml instead of innerHTML for DOM manipulation'
    }]
  },
  overrides: [
    {
      // Allow innerHTML only in specific legacy files during migration
      files: ['client/route-guard.js', 'client/auth.js'],
      rules: {
        'no-unsanitized/property': 'warn',
        'no-restricted-properties': 'warn'
      }
    }
  ]
}]