import parse from 'prettier-browser/src/parser-babylon'
import { printAstToDoc } from 'prettier-browser/src/printer'
import { printDocToString } from 'prettier-browser/src/doc-printer'

export const dimensions = {
  maxWidth: 1220,
}

export function format(code) {
  let opts = {
    cursorOffset: -1,
    rangeStart: 0,
    rangeEnd: Infinity,
    useTabs: false,
    tabWidth: 2,
    printWidth: 60,
    singleQuote: true,
    trailingComma: 'none',
    bracketSpacing: true,
    jsxBracketSameLine: false,
    parser: 'babylon',
    insertPragma: false,
    requirePragma: false,
    semi: true,
    originalText: code,
  }
  const ast = parse(code)
  const doc = printAstToDoc(ast, opts)
  const result = printDocToString(doc, opts)
  return result.formatted
}
