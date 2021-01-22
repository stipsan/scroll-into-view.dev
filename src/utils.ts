import prettier from 'prettier/standalone'
import parserBabel from 'prettier/parser-babel'

export const dimensions = {
  maxWidth: 1220,
}

export function format(code) {
  return prettier.format(code, {
    parser: 'babel',
    printWidth: 60,
    singleQuote: true,
    trailingComma: 'es5',
    plugins: [parserBabel],
  })
}
