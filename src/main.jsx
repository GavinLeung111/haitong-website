import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// 动态更新 canonical，确保 /about 等子路径被正确标注
(function updateCanonical(){
  const el = document.querySelector('link#canonical-url')
  if (!el) return
  const base = 'https://www.haitongcaishui.com'
  const path = window.location.pathname
  el.setAttribute('href', base.replace(/\/$/, '') + (path === '/' ? '' : path))
  window.addEventListener('popstate', () => {
    el.setAttribute('href', base.replace(/\/$/, '') + (window.location.pathname === '/' ? '' : window.location.pathname))
  })
})();
