import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './Routes/index'
import { SignInProvider } from './hooks/authContext'
import GlobalStyles from './globalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
    <SignInProvider>
      <Routes/>
    </SignInProvider>
    <GlobalStyles/>
  </React.StrictMode>
)
