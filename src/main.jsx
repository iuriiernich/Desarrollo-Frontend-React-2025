import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store from './store/store.js'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/Desarrollo-Frontend-React-2025/">
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
