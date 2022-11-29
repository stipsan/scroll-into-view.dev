import styles from './Section.module.css'
import cx from 'classnames'

export default function Section({children, className}: {children: React.ReactNode, className?:string}){
  return <section className={cx(styles.section, className)}>{children}</section>
}