/* tslint:disable:jsx-no-multiline-js jsx-no-lambda */

import React, { PureComponent } from 'react'
import scrollIntoView from 'scroll-into-view-if-needed'
import styled from 'styled-components'
import Code from '../Code'
import * as Example from '../Example'
import Select from '../Select'

const Item = styled.div.attrs({
  className: 'has-background-dark is-size-4',
})`
  align-items: center;
  border-radius: 4px;
  display: flex;
  height: ${Example.SIZE / 4 - 10}px;
  margin: 20px;
  color: white;
  justify-content: center;

  & + & {
  }
`

const range = ['😁', '🤯', '😅', '🤔', '🤩', '🤨', '😲']

interface BoundaryState {
  block: 'start' | 'center' | 'end' | 'nearest'
  boundary: boolean
}
class Boundary extends PureComponent<{}, BoundaryState> {
  state = {
    block: 'end' as 'start' | 'center' | 'end' | 'nearest',
    boundary: true,
  }

  frameBoundary: Element
  items: { [key: string]: HTMLElement } = {}

  doScroll = target =>
    scrollIntoView(target, {
      behavior: 'smooth',
      block: this.state.block,
      boundary: this.state.boundary ? this.frameBoundary : undefined,
    })

  render() {
    const { boundary, block } = this.state

    const SourceCode = `
    import scrollIntoView from 'scroll-into-view-if-needed';

    scrollIntoView(node, {
      behavior: 'smooth',
      block: '${block}',
      ${boundary ? 'boundary: document.getElementById("example-boundary")' : ''}
    })
    `

    return (
      <Example.Section>
        <Example.Code>
          <Example.CodeHeader>
            <div className="control">
              <label>
                Boundary:&nbsp;
                <input
                  name="boundary"
                  type="checkbox"
                  checked={boundary}
                  onChange={event =>
                    this.setState({ boundary: event.target.checked })
                  }
                />
              </label>
            </div>
            <Select
              label="Block"
              onChange={event =>
                this.setState({
                  block: event.target.value as
                    | 'start'
                    | 'center'
                    | 'end'
                    | 'nearest',
                })
              }
              value={block}
            >
              <option value="start">Start</option>
              <option value="center">Center</option>
              <option value="end">End</option>
              <option value="nearest">Nearest</option>
            </Select>
          </Example.CodeHeader>
          <Example.CodeBody>
            <Code value={SourceCode} />
          </Example.CodeBody>
        </Example.Code>
        <Example.Result>
          <Example.ResultHeader>
            <span>Scroll to&nbsp;</span>
            <Example.Button onClick={() => this.doScroll(this.items[range[1]])}>
              {range[1]}
            </Example.Button>
            <Example.Button onClick={() => this.doScroll(this.items[range[3]])}>
              {range[3]}
            </Example.Button>
            <Example.Button onClick={() => this.doScroll(this.items[range[5]])}>
              {range[5]}
            </Example.Button>
          </Example.ResultHeader>
          <Example.ScrollContainer
            id="example-boundary"
            innerRef={node => (this.frameBoundary = node as Element)}
          >
            {range.map(name => (
              <Item
                key={name}
                innerRef={node => (this.items[name] = node as HTMLElement)}
              >
                {name}
              </Item>
            ))}
          </Example.ScrollContainer>
        </Example.Result>
      </Example.Section>
    )
  }
}

export default Boundary
