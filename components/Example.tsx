import styled from 'styled-components'

const breakpoint = 768
const cornerRadius = 8
export const SIZE = 200

export const Section = styled.div.attrs({
  className: 'columns is-gapless is-multiline',
})`
  border-radius: ${cornerRadius}px;
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
  border-radius: ${cornerRadius}px ${cornerRadius}px 0 0;
  align-items: center;

  justify-content: flex-start;
  flex-direction: row;

  @media screen and (min-width: ${breakpoint}px) {
    border-radius: ${cornerRadius}px 0 0 0;
  }

  .control {
    padding: 0 0.5rem;
    /* line-height: 3; */
    display: flex;
    align-items: center;
    white-space: nowrap;
  }
`
export const CodeBody = styled.div.attrs({
  className: 'has-background-grey-darker',
})`
  border-radius: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media screen and (min-width: ${breakpoint}px) {
    border-radius: 0 0 0 ${cornerRadius}px;
  }
`

export const Result = styled.div.attrs({
  className:
    'column is-narrow has-text-centered is-centered has-background-white-bis',
})`
  border-radius: 0 0 ${cornerRadius}px ${cornerRadius}px;
  box-shadow: inset 0 0 0 1px #e4e4e4;
  overflow: hidden;

  @media screen and (min-width: ${breakpoint}px) {
    border-radius: 0 ${cornerRadius}px ${cornerRadius}px 0;
  }
`

export const ResultHeader = styled(Header).attrs({})`
  align-items: center;
  justify-content: center;
  flex-direction: row;

  span {
    font-weight: 700;
  }
`

export const ScrollContainer = styled.div`
  box-sizing: content-box;
  border: 1px solid #e4e4e4;
  background: hsla(0, 0%, 0%, 0.05);
  height: ${SIZE}px;
  overflow: scroll;
  margin-left: auto;
  margin-right: auto;
  width: ${SIZE}px;
`

export const Button = styled.a.attrs({
  className: 'button is-small',
})`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  :not(:last-child) {
    margin-right: 0.5rem;
  }
`
