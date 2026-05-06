module.exports = {
  presets: [
    // Preset for modern JavaScript features with Node.js compatibility
    ['@babel/preset-env', { targets: { node: 'current' } }],
    // React preset with automatic JSX runtime (no need to import React)
    ['@babel/preset-react', { runtime: 'automatic' }]
  ]
};