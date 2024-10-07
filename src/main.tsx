import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TestPage } from './pages/testPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TestPage />
    <App />
  </StrictMode>,
)
