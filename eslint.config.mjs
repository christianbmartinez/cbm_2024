import tailwind from "eslint-plugin-tailwindcss";

export default {
  root: true,
  extends: ["next", ...tailwind.configs["flat/recommended"], "prettier"],
  overrides: [
    {
      "files": ["*.ts", "*.tsx", , '*.js', '*.jsx'],
      "parser": "@typescript-eslint/parser"
    }
  ]
}