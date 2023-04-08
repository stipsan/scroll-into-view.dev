/* tslint:disable:no-var-requires */

import cx from 'classnames'
import computePkg from 'compute-scroll-into-view/package.json' assert { type: 'json' }
import scrollPkg from 'scroll-into-view-if-needed/package.json' assert { type: 'json' }
import smoothPkg from 'smooth-scroll-into-view-if-needed/package.json' assert { type: 'json' }

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={cx(styles.footer, 'footer')}>
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <a href="https://github.com/stipsan/scroll-into-view-if-needed">
              GitHub
            </a>
          </p>
          <div className="field is-grouped is-grouped-centered is-grouped-multiline">
            <a
              href="https://www.npmjs.com/package/scroll-into-view-if-needed"
              className="control"
            >
              <div className="tags has-addons">
                <span className="tag is-dark">scroll-into-view-if-needed</span>
                <span className="tag is-info">{scrollPkg.version}</span>
              </div>
            </a>
            <a
              href="https://www.npmjs.com/package/smooth-scroll-into-view-if-needed"
              className="control"
            >
              <div className="tags has-addons">
                <span className="tag is-dark">
                  smooth-scroll-into-view-if-needed
                </span>
                <span className="tag is-info">{smoothPkg.version}</span>
              </div>
            </a>
            <a
              href="https://www.npmjs.com/package/compute-scroll-into-view"
              className="control"
            >
              <div className="tags has-addons">
                <span className="tag is-dark">compute-scroll-into-view</span>
                <span className="tag is-info">{computePkg.version}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
