import cx from 'classnames'

import Alignment from './ExampleAlignment'
import Boundary from './ExampleBoundary'
import IfNeeded from './ExampleIfNeeded'
import OverrideBehavior from './ExampleOverrideBehavior'
import Footer from './Footer'
import Hero from './Hero'

import styles from './page.module.css'

export default function Page() {
  return (
    <>
      <Hero />
      <div className="container is-fluid">
        <section className={cx(styles.intro, 'columns')}>
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
              <code>behavior: "smooth"</code> is only ponyfilled if you use the
              add-on package <code>smooth-scroll-into-view-if-needed</code>. You
              don't need the add-on if native smooth scrolling is enough.
            </p>
          </div>
          <div className="column">
            <h2 className="is-size-4">Customizable</h2>
            <p>
              A couple of options not in the spec by the CSS working group helps
              customize scrolling to your needs. Avoid scrolling unwanted parent
              elements by using the <code>boundary: Element</code> option. Pass
              a function to <code>behavior</code> to customize exactly how
              elements are scrolled when <code>smooth</code> isn't enough.
            </p>
          </div>
        </section>
        <section
          className="columns is-multiline is-desktop"
          id="scrolling-if-needed"
        >
          <div className="column is-one-third-desktop">
            <h3 className="title">Scrolling if needed</h3>
            <p className="subtitle">
              When deciding if scrolling is needed the visibility of the target
              element is checked. If it's less than 100% it will be scrolled.
            </p>
            <p>
              By default the browser controls the scrolling when{' '}
              <code>behavior: 'smooth'</code> (unless you opt in to the
              ponyfill). Note there's browser differences with native smooth
              scrolling, like{' '}
              <a
                href="https://user-images.githubusercontent.com/81981/38905887-9c00eff2-42b3-11e8-86aa-41ef679a54af.gif"
                rel="noopener noreferrer"
                target="_blank"
              >
                Chrome
              </a>{' '}
              vs{' '}
              <a
                href="https://user-images.githubusercontent.com/81981/38905963-3065b790-42b4-11e8-9fab-35393d7b7d09.gif"
                rel="noopener noreferrer"
                target="_blank"
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
        </section>
        <section
          className="columns is-multiline is-desktop"
          id="scroll-alignment"
        >
          <div className="column is-one-third-desktop">
            <h3 className="title">Scroll alignment</h3>
            <p className="subtitle">
              The position options for both <code>block</code> and{' '}
              <code>inline</code> are supported. Mix and match to your heart's
              content.
            </p>
            <p>
              Usually <code>block</code> aligns vertically, while{' '}
              <code>inline</code> aligns horizontally. It depends on the{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode">
                writing-mode
              </a>
              .
            </p>
          </div>
          <div className="column is-two-thirds-desktop">
            <Alignment />
          </div>
        </section>
        <section
          className="columns is-multiline is-desktop"
          id="limit-propagation"
        >
          <div className="column is-one-third-desktop">
            <h3 className="title">Limit propagation</h3>
            <p className="subtitle">
              Boundaries are good, that's what people keep saying. If you want
              some elements to scroll into view, but not all of the parents then{' '}
              <code>boundary</code> is the answer.
            </p>
            <p>Keep in mind this is a non-standard feature not in any spec.</p>
          </div>
          <div className="column is-two-thirds-desktop">
            <Boundary />
          </div>
        </section>
        <section
          className="columns is-multiline is-desktop"
          id="custom-transition"
        >
          <div className="column is-one-third-desktop">
            <h3 className="title">Custom transition: popmotion example</h3>
            <p className="subtitle">
              If you want a different easing, duration or another creative
              direction you can pass a function to <code>behavior</code>.
            </p>
            <p>
              Just like <code>boundary</code> this is not in the spec.
            </p>
          </div>
          <div className="column is-two-thirds-desktop">
            <OverrideBehavior />
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
