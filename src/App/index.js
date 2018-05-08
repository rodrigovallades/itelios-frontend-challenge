import './App.scss'
import { Card } from '../components/Card'

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
      this.visitedDom.innerHTML = 'No product visited.'
    } else {
      const card = new Card(this.item)
      this.visitedDom.innerHTML = card.render()
    }
  }

  renderRecommendation() {
    if (!this.recommendation.length) {
      this.recommendationDom.innerHTML = 'No recommendations.'
    } else {
      let productsHtml = ``;
      this.recommendation.map((product, index) => {
        const card = new Card(this.item)
        productsHtml += card.render()
      });
      this.recommendationDom.innerHTML = productsHtml
    }
  }

  render() {
    this.renderVisited()
    this.renderRecommendation()
  }
}
