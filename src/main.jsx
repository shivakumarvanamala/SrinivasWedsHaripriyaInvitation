import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Always start the invitation from the top (closed doors), even on refresh.
// The browser otherwise restores the previous scroll position / honours a
// leftover #section hash, dropping the guest into the middle of the page.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}
// Drop any leftover hash (e.g. #saptapadi from a nav click) without adding
// a history entry, then pin to the top before React paints.
if (window.location.hash) {
  window.history.replaceState(null, '', window.location.pathname + window.location.search)
}
window.scrollTo(0, 0)
// belt-and-suspenders: re-pin once everything (fonts/images) has loaded
window.addEventListener('load', () => window.scrollTo(0, 0))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
