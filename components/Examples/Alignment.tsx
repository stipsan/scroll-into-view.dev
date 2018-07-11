import { PureComponent } from 'react'
import scrollIntoView from 'scroll-into-view-if-needed'
import styled from 'styled-components'
import Code from '../Code'
import * as Example from '../Example'
import Select from '../Select'

const layerSize = Example.SIZE * 1.5 + Example.SIZE / 6
const layerPadding = Example.SIZE / 12
const ScrollLayer = styled.div.attrs({
  className: 'columns is-multiline is-mobile is-gapless',
})`
  box-sizing: border-box;
  padding: ${layerPadding}px;
  height: ${layerSize}px;
  width: ${layerSize}px;
`

const Item = styled.div.attrs({ className: 'column is-one-third' })`
  justify-content: center;
  display: flex;
  align-items: center;
  /* The following is to support vertical writing mode */
  height: ${100 / 3}%;
`
const Tile = styled.div.attrs({
  className: 'has-background-primary is-size-1',
})`
  align-items: center;
  border-radius: 4px;
  display: flex;
  height: ${Example.SIZE / 3}px;
  color: hsla(0, 0%, 0%, 0.3);
  justify-content: center;
  width: ${Example.SIZE / 3}px;
`

const range = [1, 2, 3, 4, 5, 6, 7, 8, 9]

class Alignment extends PureComponent {
  state = {
    block: 'center',
    inline: 'center',
  }

  items: HTMLElement[] = []

  doScroll = target =>
    scrollIntoView(target, {
      behavior: 'smooth',
      // @TODO resolve "as" tricks here
      block: this.state.block as 'start' | 'center' | 'end' | 'nearest',
      inline: this.state.inline as 'start' | 'center' | 'end' | 'nearest',
    })

  render() {
    const { block, inline } = this.state

    return (
      <Example.Section>
        <Example.Code>
          <Example.CodeHeader>
            <Select
              label="Block"
              onChange={event => this.setState({ block: event.target.value })}
              value={block}
            >
              <option value="start">Start</option>
              <option value="center">Center</option>
              <option value="end">End</option>
              <option value="nearest">Nearest</option>
            </Select>

            <Select
              label="Inline"
              onChange={event => this.setState({ inline: event.target.value })}
              value={inline}
            >
              <option value="start">Start</option>
              <option value="center">Center</option>
              <option value="end">End</option>
              <option value="nearest">Nearest</option>
            </Select>
          </Example.CodeHeader>
          <Example.CodeBody>
            <Code>{`
        import scrollIntoView from 'scroll-into-view-if-needed';

        scrollIntoView(node, ${JSON.stringify({
          behavior: 'smooth',
          block,
          inline,
        })})
        `}</Code>
          </Example.CodeBody>
        </Example.Code>
        <Example.Result>
          <Example.ResultHeader>
            <span>Scroll to&nbsp;</span>
            <Example.Button onClick={() => this.doScroll(this.items[1])}>
              1
            </Example.Button>
            <Example.Button onClick={() => this.doScroll(this.items[5])}>
              5
            </Example.Button>
            <Example.Button onClick={() => this.doScroll(this.items[9])}>
              9
            </Example.Button>
          </Example.ResultHeader>
          <Example.ScrollContainer>
            <ScrollLayer>
              {range.map(number => (
                <Item key={number}>
                  <Tile
                    innerRef={node =>
                      (this.items[number] = node as HTMLElement)
                    }
                  >
                    {number}
                  </Tile>
                </Item>
              ))}
            </ScrollLayer>
          </Example.ScrollContainer>
        </Example.Result>
      </Example.Section>
    )
  }
}

export default Alignment
