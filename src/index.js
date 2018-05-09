import 'normalize.css'

import './styles/base/_global.scss'

import { App } from './App'

function init() {
  const app = new App()

  app.getProducts()
    .then(res => res.json())
    .then(res => {
      app.item = res.data.item
      app.recommendation = res.data.recommendation
      app.widget = res.data.widget
      console.log(app)
      app.render()
    })
    .catch()

  app.render()
}

document.addEventListener('DOMContentLoaded', init)
