import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import RouterLink from './RouterLink'

describe('RouterLink', () => {
  it('renders', () => {
    render(<RouterLink href="/test">Link</RouterLink>)
  })
})
