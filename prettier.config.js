module.exports = {
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  tabWidth: 2,
  useTabs: false,
  endOfLine: "lf",
  bracketSpacing: true,
  arrowParens: "always",
  printWidth: 120,
  bracketSameLine: true,
  plugins: [require.resolve("prettier-plugin-sort-imports")],
  importOrder: [
    "^react$", // React imports first
    "<THIRD_PARTY_MODULES>", // Third-party imports
    "^@/", // Internal imports
    "^[./]", // Relative imports
  ],
  importOrderSeparation: true, // Add a newline between import groups
  importOrderSortSpecifiers: true, // Sort the specifiers within import statements
};
