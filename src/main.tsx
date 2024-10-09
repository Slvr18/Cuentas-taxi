import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TestPage } from './components/pages/testPage.tsx'
import { MainPage } from './components/pages/MainPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainPage />
    {/* 
    <TestPage message = 'Welcome' />
    <App />
    */}
  </StrictMode>,
)
