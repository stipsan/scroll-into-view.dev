import styled from 'styled-components'
import { dimensions } from '../utils'

export interface SectionProps {
  children: React.ReactNode
  className?: string
}

export default styled.section`
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;
  max-width: ${dimensions.maxWidth}px;
`
