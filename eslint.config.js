// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "@/indent": ["error", 4],

      // Basic rules
      semi: ["error", "always"],
      quotes: ["error", "single"],
      "comma-dangle": ["error", "never"],
      "no-console": "warn",
      "no-debugger": "warn",
      "linebreak-style": ["error", "unix"],
      "operator-linebreak": ["error", "before"],
      "space-in-parens": ["error", "never"],
      "no-extra-parens": ["error", "all"],
      curly: ["error", "all"],

      // TypeScript specific rules
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        { allowExpressions: true },
      ],
      "@typescript-eslint/explicit-module-boundary-types": [
        "warn",
        { allowArgumentsExplicitlyTypedAsAny: false },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/indent": ["error", 2],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-assertions": [
        "warn",
        { assertionStyle: "as" },
      ],
      "@typescript-eslint/no-implicit-any": "error",
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        { accessibility: "explicit" },
      ],

      // Angular specific rules
      "@angular-eslint/component-class-suffix": [
        "error",
        { suffixes: ["Component", "Page"] },
      ],
      "@angular-eslint/directive-class-suffix": [
        "error",
        { suffixes: ["Directive"] },
      ],
      "@angular-eslint/no-duplicate-class-name": "error",
      "@angular-eslint/lifecycle-hooks": "error",
      "@angular-eslint/no-any": "error",
      "@angular-eslint/require-decorator": "error",
      "@angular-eslint/module-name": ["error", { prefix: "app" }],

      // RxJS specific rules
      "rxjs/no-async-subscribe": "error",
      "rxjs/no-ignored-takewhile": "warn",
      "rxjs/no-ignored-observable": "warn",
      "rxjs/ban-observable-creation": ["error", { allow: ["fromEvent"] }],

      // Security rules
      "no-eval": "error",
      "no-new-func": "error",
      "@angular-eslint/no-dangerous-url": "error",

      // Code complexity and readability
      complexity: ["error", { max: 10 }],
      "max-lines": [
        "error",
        { max: 300, skipBlankLines: true, skipComments: true },
      ],
      "max-params": ["error", 4],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "brace-style": ["error", "1tbs"],
      "keyword-spacing": ["error", { before: true, after: true }],
      "space-before-function-paren": ["error", "never"],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
