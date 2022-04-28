module.exports = {
  root: true,

  settings: {
    react: {
      version: "detect",
    },
  },

  plugins: ["simple-import-sort", "import"],

  extends: [
    "next",
    "prettier",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],

  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "react/react-in-jsx-scope": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "max-len": [
      "error",
      {
        code: 120,
        ignoreComments: true,
        ignorePattern: '.*className=".{80,}"',
      },
    ],
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": ["error", { before: false, after: true }],
    indent: ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    semi: ["error", "always"],
    "object-curly-spacing": ["error", "always"],
    "no-empty-function": "error",
    "arrow-body-style": ["error", "as-needed"],
    "newline-after-var": ["error", "always"],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-no-duplicate-props": 1,
    "react/jsx-max-props-per-line": [1, { maximum: 3 }],
    "react/display-name": [0, { ignoreTranspilerName: true }],
    "react/prop-types": 0,
    "react/forbid-prop-types": 0,
    "react/no-unused-prop-types": 2,
    "react/sort-prop-types": [
      2,
      {
        callbacksLast: true,
        ignoreCase: true,
        requiredFirst: true,
        sortShapeProp: true,
        noSortAlphabetically: true,
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
};
