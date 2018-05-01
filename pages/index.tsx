import { Component } from 'react'
import systemFontStack from 'system-font-stack'
import styled, { injectGlobal } from 'styled-components'
import Section from '../components/Section'
import Footer from '../components/Footer'
import { Text as TextIcon, Chrome } from '../components/Icons'
import IfNeeded from '../components/Examples/IfNeeded'
import Alignment from '../components/Examples/Alignment'
import Boundary from '../components/Examples/Boundary'
import OverrideBehavior from '../components/Examples/OverrideBehavior'

import scrollIntoView from 'smooth-scroll-into-view-if-needed'

injectGlobal`
  html,
  body {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: ${systemFontStack};
  }
`

export interface IndexPageProps {
  items: number[]
}

const Hero = styled.header`
  display: flex;
  box-sizing: border-box;
  padding: 90px 10px;
  padding-top: 10vmin;
  padding-bottom: 10vmin;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(168deg, #b3fbf7 0%, #ff0561 100%);
  background-image: linear-gradient(156deg, #fffd82 6%, #fa2863 86%);
  background-image: linear-gradient(168deg, #b1d2fa 0%, #05ffe6 100%);
`
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 744px;

  svg {
    width: 100%;
    height: auto;
  }

  > svg {
    z-index: 1;
    position: relative;
  }
`
const ScrollWrapper = styled.div`
  position: absolute;
  transition: opacity 100ms;
  /* overflow: scroll; is so ugly on machines that don't hide scrollbars */
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 3px;
  opacity: 0.6;

  @supports (mix-blend-mode: overlay) {
    opacity: 1;
    mix-blend-mode: overlay;
  }
`

const IntroductionSection = styled(Section)`
  margin-top: 10px;
`

export default class IndexPage extends Component<IndexPageProps> {
  static defaultProps = {
    items: Array.apply(null, { length: 100 }).map(Number.call, Number),
  }

  state = { maxHeight: 'auto' }

  scrollToBoundary: HTMLElement
  scrollToRef: SVGElement
  maxHeightRef: SVGElement
  timeout: any

  componentDidMount() {
    window.addEventListener('load', () => {
      console.log(this.maxHeightRef.getBoundingClientRect().height)
      this.setState(
        { maxHeight: `${this.maxHeightRef.getBoundingClientRect().height}px` },
        () => {
          this.timeout = setTimeout(() => {
            scrollIntoView(this.scrollToRef, {
              behavior: 'smooth',
              block: 'end',
              boundary: this.scrollToBoundary,
            })
          }, 1500)
        }
      )
    })
  }

  componentWIllUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    return (
      <div>
        <Hero>
          <Wrapper innerRef={node => (this.scrollToBoundary = node)}>
            <Chrome innerRef={node => (this.maxHeightRef = node)} />
            <ScrollWrapper
              style={{
                maxHeight: this.state.maxHeight,
                opacity: this.state.maxHeight === 'auto' ? 0 : undefined,
              }}
            >
              <TextIcon innerRef={node => (this.scrollToRef = node)} />
            </ScrollWrapper>
          </Wrapper>
        </Hero>
        <div className="container is-fluid">
          <IntroductionSection className="columns">
            <div className="column">
              <h2 className="is-size-4">Ponyfill</h2>
              <p>
                This package <a href="http://ponyfill.com/">ponyfills</a>
                &nbsp;new features in the&nbsp;
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView">
                  Element.scrollIntoView
                </a>{' '}
                API. Including features in the non-standard{' '}
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoViewIfNeeded">
                  Element.scrollIntoViewIfNeeded
                </a>{' '}
                API, that the CSS working group is{' '}
                <a href="https://github.com/w3c/csswg-drafts/pull/1805">
                  proposing
                </a>{' '}
                to add to <code>scrollIntoVIew</code> as another option:{' '}
                <code>scrollMode: "if-needed"</code>.
              </p>
            </div>
            <div className="column">
              <h2 className="is-size-4">Minimal</h2>
              <p>
                The core package <code>scroll-into-view-if-needed</code> is
                unapologetically small and dependency-free. That is why{' '}
                <code>behavior: "smooth"</code> is only ponyfilled if you use
                the add-on package{' '}
                <code>smooth-scroll-into-view-if-needed</code>. You don't need
                the add-on if native smooth scrolling is enough.
              </p>
            </div>
            <div className="column">
              <h2 className="is-size-4">Customizable</h2>
              <p>
                A couple of options not in the spec by the CSS working group
                helps customize scrolling to your needs. Avoid scrolling
                unwanted parent elements by using the{' '}
                <code>boundary: Element</code> option. Pass a function to{' '}
                <code>behavior</code> to customize exactly how elements are
                scrolled when <code>smooth</code> isn't enough.
              </p>
            </div>
          </IntroductionSection>
          <Section className="columns is-multiline is-desktop">
            <div
              className="column is-one-third-desktop"
              style={{ minWidth: '250px' }}
            >
              <h3 className="title">Scrolling if needed</h3>
              <p className="subtitle">
                When deciding if scrolling is needed the visibility of the
                target element is checked. If it's less than 100% it will be
                scrolled.
              </p>
              <p>
                By default the browser controls the scrolling when{' '}
                <code>behavior: 'smooth'</code> (unless you opt in to the
                ponyfill). Note there's browser differences with native smooth
                scrolling, like{' '}
                <a
                  target="_blank"
                  href="https://user-images.githubusercontent.com/81981/38905887-9c00eff2-42b3-11e8-86aa-41ef679a54af.gif"
                >
                  Chrome
                </a>{' '}
                vs{' '}
                <a
                  target="_blank"
                  href="https://user-images.githubusercontent.com/81981/38905963-3065b790-42b4-11e8-9fab-35393d7b7d09.gif"
                >
                  FireFox
                </a>{' '}
                in this{' '}
                <a href="https://codepen.io/stipsan/pen/NMxLew">CodePen</a>.
              </p>
            </div>
            <div className="column is-two-thirds-desktop">
              <IfNeeded />
            </div>
          </Section>
          <Section className="columns">
            <div className="column is-one-third">
              <h3 className="title">Scroll alignment</h3>
              <p className="subtitle">
                The options <code>block</code> and <code>inline</code> each have
                one of <code>"start"</code>, <code>"center"</code>,{' '}
                <code>"end"</code> or <code>"nearest"</code>. The default values
                are <code>block: "center"</code> and{' '}
                <code>inline: "nearest"</code>.
              </p>
              <p>
                Usually <code>block</code> aligns vertically, while{' '}
                <code>inline</code> aligns horizontally. It depends on the{' '}
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode">
                  writing-mode
                </a>.
              </p>
            </div>
            <div className="column">
              <Alignment />
            </div>
          </Section>
          <Section className="columns">
            <div className="column is-one-third">
              <h3 className="title">Limit propagation</h3>
              <p className="subtitle">
                Boundaries are good, that's what people keep saying. If you want
                some elements to scroll into view, but not all of the parents
                then <code>boundary</code> is the answer.
              </p>
              <p>
                Keep in mind this is a non-standard feature not in any spec. If
                you want to use this library as a <code>ponyfill</code> that you
                can easily delete the day browser support is good enough then
                it's worth exploring other solutions to your use case.
              </p>
            </div>
            <div className="column">
              <Boundary />
            </div>
          </Section>
          <Section className="columns">
            <div className="column is-one-third">
              <h3 className="title">Custom transition: popmotion example</h3>
              <p className="subtitle">
                If you want a different easing, duration or another creative
                direction you can pass a function to <code>behavior</code>.
              </p>
              <p>
                Just like <code>behavior</code> this is not in the spec. Also
                note that you shouldn't combine this option with{' '}
                <code>smooth-scroll-into-view-if-needed</code> or you'll bloat
                your bundle for no reason.
              </p>
            </div>
            <div className="column">
              <OverrideBehavior />
            </div>
          </Section>
        </div>
        <Footer />
      </div>
    )
  }
}
