import styled from 'styled-components'

export const Section = styled.div.attrs({
  className: 'columns is-gapless is-multiline',
})`
  border-radius: 10px;
  min-width: 0px;
`

export const Code = styled.div.attrs({ className: 'column' })`
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  padding-top: 2px;
`

export const CodeHeader = styled(Header).attrs({
  className: 'has-background-grey-dark',
})`
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`
export const CodeBody = styled.div.attrs({
  className: 'has-background-grey-darker',
})`
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`
