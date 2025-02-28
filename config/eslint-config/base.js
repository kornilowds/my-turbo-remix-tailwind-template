import tseslint from "typescript-eslint";
import turboPlugin from "eslint-plugin-turbo";
import js from "@eslint/js";
import pluginPrettier from "eslint-plugin-prettier/recommended";

/** @type {import("eslint").Linter.Config} */
export const config = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginPrettier,

  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },

  {
    ignores: [
      "**/.eslintrc.cjs",
      "**/*.config.js",
      "**/*.config.cjs",
      ".next",
      "dist",
      "pnpm-lock.yaml",
      "**/build",
      "**/public/build",
      "**/playwright-report",
    ],
  },
];
