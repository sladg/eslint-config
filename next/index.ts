import { defaultIgnorePatterns, defaultRules, defaultExtends, defaultParser, defaultPlugins, ESLintConfig } from "../core"

const config: ESLintConfig = {
  // @TODO: Add NextJS extension here so we overcome warnings during lint.
  parser: defaultParser,
  extends: [...defaultExtends],
  plugins: [...defaultPlugins],
  ignorePatterns: defaultIgnorePatterns,
  env: {
    commonjs: true,
    browser: true,
  },
  rules: {
    ...defaultRules,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}

module.exports = config
