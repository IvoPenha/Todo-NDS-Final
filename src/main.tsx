import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactRoutes } from './Routes/Routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReactRoutes/>
  </React.StrictMode>
)
