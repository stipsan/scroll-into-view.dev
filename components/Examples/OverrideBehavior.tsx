import { PureComponent } from 'react'
import styled from 'styled-components'
import scrollIntoView from 'scroll-into-view-if-needed'
import scroll from 'stylefire/scroll'
import { spring } from 'popmotion'

import Code from '../Code'
import * as Example from '../Example'
import Select from '../Select'

const ScrollLayer = styled.div`
  display: flex;
  padding-left: ${Example.SIZE}px;
  padding-right: ${Example.SIZE}px;
  width: ${Example.SIZE * 3}px;
`

const Item = styled.div.attrs({
  className: 'is-size-1',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${Example.SIZE / 2}px;
  width: ${Example.SIZE / 2}px;
  margin: ${Example.SIZE / 4}px;
  color: black;
`

const emojis = ['🌎', '🌍', '🌏']

class Boundary extends PureComponent {
  state = {
    inline: 'center' as 'center',
    boundary: true,
    selected: 0,
  }

  container: HTMLElement
  buttons: HTMLElement[] = []
  items: HTMLElement[] = []

  doScroll = target =>
    scrollIntoView(target, {
      behavior: instructions => {
        const [{ el, left }] = instructions
        const elementScroll = scroll(el as HTMLElement)

        spring({
          from: el.scrollLeft,
          to: left,
        }).start(v => elementScroll.set('left', v))
      },
      boundary: this.container,
      inline: this.state.inline,
    })

  componentDidMount() {
    this.container.scrollLeft = Example.SIZE
  }

  componentDidUpdate() {
    this.doScroll(this.items[this.state.selected])
  }
  component
  render() {
    return (
      <Example.Section>
        <Example.Code>
          <Example.CodeHeader>
            <Select
              label="Inline"
              onChange={event => this.setState({ inline: event.target.value })}
              value={this.state.inline}
            >
              <option value="center">Center</option>
              <option value="nearest">Nearest</option>
            </Select>
          </Example.CodeHeader>
          <Example.CodeBody>
            <Code>{`
        import scrollIntoView from 'scroll-into-view-if-needed';
        import scroll from 'stylefire/scroll'
        import { spring } from 'popmotion'

        scrollIntoView(node, {behavior: instructions => {
          const [{ el, left }] = instructions
            const elementScroll = scroll(el)
    
            spring({from: el.scrollLeft,to: left})
            .start((left) => elementScroll.set('left', left))
            
          },inline: ${JSON.stringify(this.state.inline)}})
        `}</Code>
          </Example.CodeBody>
        </Example.Code>
        <Example.Result>
          <Example.ResultHeader>
            <span>Scroll to&nbsp;</span>
            {emojis.map((emoji, key) => (
              <Example.Button
                key={emoji}
                ref={button => (this.buttons[key] = button)}
                onClick={() => this.setState({ selected: key })}
              >
                {emoji}
              </Example.Button>
            ))}
          </Example.ResultHeader>
          <Example.ScrollContainer
            innerRef={container => (this.container = container)}
          >
            <ScrollLayer>
              {emojis.map((emoji, key) => (
                <Item key={emoji} innerRef={node => (this.items[key] = node)}>
                  {emoji}
                </Item>
              ))}
            </ScrollLayer>
          </Example.ScrollContainer>
        </Example.Result>
      </Example.Section>
    )
  }
}

export default Boundary
