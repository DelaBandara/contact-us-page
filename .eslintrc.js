module.exports = {
    // ...other ESLint configurations...
  
    plugins: ['react'], // Add the 'react' plugin
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
    parserOptions: {
      ecmaVersion: 2021, // Or the appropriate ECMAScript version
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true, // Enable JSX
      },
    },
  };
  