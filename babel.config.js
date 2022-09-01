module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-syntax-throw-expressions",
    "@babel/plugin-proposal-throw-expressions",
  ],
};
