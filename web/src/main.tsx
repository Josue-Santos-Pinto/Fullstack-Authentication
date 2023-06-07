import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyle from './GlobalStyles.ts'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './contexts/Context.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <GlobalStyle />
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
