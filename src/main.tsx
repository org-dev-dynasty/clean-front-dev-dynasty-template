import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ClientContextProvider } from './app/context/client_context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClientContextProvider>
      <App />
    </ClientContextProvider>
  </React.StrictMode>,
)
