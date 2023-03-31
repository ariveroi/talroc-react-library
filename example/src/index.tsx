import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button } from 'talroc-react-library'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <h2>Default button</h2>
      <Button label='My Button' />
    </div>
  </React.StrictMode>,
)
