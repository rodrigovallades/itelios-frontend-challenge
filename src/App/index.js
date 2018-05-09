import { Card } from '../components/Card'

import './App.scss'

export class App {
  constructor() {
    this.item = {}
    this.recommendation = []
    this.widget = {}
    this.visitedDom = document.querySelector('visited')
    this.recommendationDom = document.querySelector('recommendation')
  }

  getProducts() {
    return fetch('./products.json');
  }

  renderVisited() {
    if (!this.item.price) {
      this.visitedDom.innerHTML = '<h2>Nenhum produto.</h2>'
    } else {
      let productsHtml = `<h2>Você visitou:</h2>`
      const card = new Card(this.item)
      productsHtml += card.render()
      this.visitedDom.innerHTML = productsHtml
    }
  }

  renderRecommendation() {
    if (!this.recommendation.length) {
      this.recommendationDom.innerHTML = '<h2>Sem recomendações.</h2>'
    } else {
      let productsHtml = `<h2>e talvez se interesse por:</h2>`
      productsHtml += `<div class='products'>`
      this.recommendation.map((product, index) => {
        const card = new Card(this.item)
        productsHtml += card.render()
      });
      productsHtml += `</div>`
      this.recommendationDom.innerHTML = productsHtml
    }
  }

  render() {
    this.renderVisited()
    this.renderRecommendation()
  }
}
