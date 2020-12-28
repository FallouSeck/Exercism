module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: 'current',
        },
        useBuiltIns: false,
      },

    ],
  ],
  plugins: [
    "@babel/plugin-syntax-bigint",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-class-properties"
  ]
};
