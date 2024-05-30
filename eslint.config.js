import globals from "globals"
import pluginJs from "@eslint/js"
import pluginVue from "eslint-plugin-vue"
import { dirname } from "path"

const __dirname = dirname(__filename)

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
]
