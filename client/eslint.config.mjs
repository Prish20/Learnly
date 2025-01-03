import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginNext from "@next/eslint-plugin-next";
import pluginTailwind from "eslint-plugin-tailwindcss";
import pluginPrettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      "react-hooks": pluginReactHooks,
      "@next/next": pluginNext,
      "tailwindcss": pluginTailwind,
      "prettier": pluginPrettier,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "react/prop-types": "off", // Not needed if using TypeScript
      "react-hooks/rules-of-hooks": "error", // Enforce React Hooks rules
      "react-hooks/exhaustive-deps": "warn", // Enforce exhaustive deps in useEffect
      "@next/next/no-html-link-for-pages": "error", // Next.js-specific rule
      "tailwindcss/classnames-order": "warn", // Enforce Tailwind class order
      "tailwindcss/enforces-negative-arbitrary-values": "warn", // Enforce negative arbitrary values
      "tailwindcss/enforces-shorthand": "warn", // Enforce shorthand syntax
      "tailwindcss/no-arbitrary-value": "off", // Allow arbitrary values
      "tailwindcss/no-custom-classname": "warn", // Warn against custom class names
      "tailwindcss/no-contradicting-classname": "error", // Detect conflicting classes
      "prettier/prettier": "error", // Run Prettier as an ESLint rule
    },
  },
  {
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
      tailwindcss: {
        callees: ["classnames", "clsx", "tw"], // Functions that use Tailwind classes
        config: "tailwind.config.ts", // Path to your Tailwind config file
      },
    },
  },
];
