'use strict'

import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  font-family: 'serif';
  color: ${(props) => props.color}
`

const App = () => (
  <div>
    <H1 className={`${style.button} button`}>React App!</H1>
  </div>
)

export default App
