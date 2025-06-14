import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.tsx'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
       <Provider store={store}>
             <App />
        </Provider>
    </BrowserRouter>
  </StrictMode>,
)
