import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/base.css'
import registerServiceWorker from './registerServiceWorker'

const startApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
  registerServiceWorker()
}

if (window.cordova) {
  document.addEventListener('deviceready', startApp, false)
  document.body.styles.paddingTop = '20px'
} else {
  startApp()
}
