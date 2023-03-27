import { Container } from '@mui/material'
import React from 'react'
import Products from './pages/products'

function App() {
  return (
    <div className='App'>
      <Container maxWidth='lg'>
        <Products />
      </Container>
    </div>
  )
}

export default App
