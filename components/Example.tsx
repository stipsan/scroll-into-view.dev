import styled from 'styled-components'

export const Section = styled.div.attrs({
  className: 'columns is-gapless is-multiline',
})`
  border-radius: 10px;
  min-width: 0px;
`

export const Code = styled.div.attrs({ className: 'column' })`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  min-height: 45px;
  padding: 0 5px;
`

export const CodeHeader = styled(Header).attrs({
  className: 'has-background-grey-dark has-text-light',
})`
  border-radius: 10px 0 0 0;
  align-items: center;

  justify-content: flex-start;
  flex-direction: row;

  .control {
    padding: 0.5rem;
  }
`
export const CodeBody = styled.div.attrs({
  className: 'has-background-grey-darker',
})`
  border-radius: 0 0 0 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const Result = styled.div.attrs({
  className:
    'column is-narrow has-text-centered is-centered has-background-white-bis',
})`
  border-radius: 0 10px 10px 0;
  box-shadow: inset 0 0 0 1px #e4e4e4;
`

export const ResultHeader = styled(Header).attrs({})`
  border-radius: 0 10px 0 0;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  .control {
    padding: 0.5rem;
  }
`
