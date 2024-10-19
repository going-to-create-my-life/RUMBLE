module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},   // Fixes flexbox bugs
    'tailwindcss': {},              // Tailwind CSS integration
    'postcss-preset-env': {         // Polyfills modern CSS features
      stage: 3,                     // Configuring with stage 3 features
      features: {
        'nesting-rules': true       // Enabling CSS nesting (optional)
      }
    },
    'autoprefixer': {},             // Adds vendor prefixes for cross-browser compatibility
  },
};

