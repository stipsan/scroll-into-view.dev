import React from 'react'
import styled from 'styled-components'
import { dimensions } from '../utils'

export interface SectionProps {
  children: React.ReactNode
  className?: string
}

export default styled.section`
  margin-left: auto !important;
  margin-right: auto !important;
  padding: 20px 0 !important;
  max-width: ${dimensions.maxWidth}px;
`
