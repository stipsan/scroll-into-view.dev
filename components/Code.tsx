import { PureComponent } from 'react'
import styled from 'styled-components'
import { format } from '../utils'

import Refractor from 'react-refractor'
import js from 'refractor/lang/javascript'

Refractor.registerLanguage(js)

const StyledSyntaxHighlighter = styled(Refractor).attrs({
  className: 'is-flex',
})`
  background: transparent;
  height: 100%;
`

class Code extends PureComponent<{ children: string }> {
  render() {
    const formattedCode = format(this.props.children)
    return (
      <StyledSyntaxHighlighter language="javascript" value={formattedCode} />
    )
  }
}

export default Code
