import React from 'react'
import Chalanges from './Chalanges'
import { ChalangeProvider } from './context'

function App() {
  return (
    <div>
      <ChalangeProvider>
        <Chalanges />
      </ChalangeProvider>
    </div>
  )
}

export default App
