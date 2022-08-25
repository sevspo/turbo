module.exports = {
  ...require("config/eslint-angular"),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    createDefaultProgram: true,
  },
};
