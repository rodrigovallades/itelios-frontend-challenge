import Glide from '@glidejs/glide'
import { Card } from '../Card'

import './glide.core.scss';
import './glide.theme.scss';

export class Carousel {

  constructor(items) {
    this.items = items
  }

  renderItems() {
    let productsHtml = ``
    this.items.map(product => {
      const card = new Card(product)
      productsHtml += card.render()
    });
    return productsHtml;
  }

  renderBullets() {
    let bulletsHtml = ``
    this.items.map((product, index) => {
      bulletsHtml += `<button class="glide__bullet" data-glide-dir="=${index}"></button>`
    });
    return bulletsHtml;
  }

  init() {
    const glide = new Glide('.glide', {
      type: 'carousel',
      gap: 0,
      keyboard: true,
      perView: 3,
      breakpoints: {
        1233: {
          perView: 2
        },
        760: {
          perView: 1
        }
      }
    })
    glide.mount()
  }

  render() {
    return `
      <div class='products glide'>
        <div data-glide-el="track" class="glide__track">
          <div class="glide__slides">
            ${this.renderItems()}
          </div>
          <div class="glide__bullets" data-glide-el="controls[nav]">
            ${this.renderBullets()}
          </div>
        </div>
      </div>`
  }
}
