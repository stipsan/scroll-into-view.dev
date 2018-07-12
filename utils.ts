const prettier = require('prettier/standalone')
const plugins = [require('prettier/parser-babylon')]

export const dimensions = {
  maxWidth: 1220,
}

export function format(code) {
  return prettier.format(code, {
    parser: 'babylon',
    printWidth: 60,
    singleQuote: true,
    trailingComma: 'es5',
    plugins,
  })
}
