import 'normalize.css'

import './styles/base/_global.scss'

// this is my main app module
import { App } from './App'

function init() {
  const app = new App()

  app.getProducts()
    // fetches 'products.json'
    .then(res => res.json())
    .then(res => {
      // populates the application state
      app.item = res.data.item
      app.recommendation = res.data.recommendation
      app.widget = res.data.widget

      // re-renders the app when fetch is successful
      app.render()
    })

  // renders the app, similar to what React does
  app.render()
}

// waits for the dom to be ready
document.addEventListener('DOMContentLoaded', init)
