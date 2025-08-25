import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import { defineConfig } from "eslint/config"
import reactHooks from "eslint-plugin-react-hooks"
import tsParser from "@typescript-eslint/parser"
import stylistic from "@stylistic/eslint-plugin"

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      js,
      "react-hooks": reactHooks,
    },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "semi": ["error", "never"],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "quotes": ["error", "double"],
    }
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.eslint.json",
      },
    },
    ignores: ["vite.config.ts"],
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "semi": ["error", "never"],
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@stylistic/no-extra-semi": "error",
      "@stylistic/member-delimiter-style": [
        "error",
        {
          multiline: { delimiter: "none", requireLast: false },
          singleline: { delimiter: "comma", requireLast: false },
        },
      ],
    }
  },
  tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",
    }
  }
])
