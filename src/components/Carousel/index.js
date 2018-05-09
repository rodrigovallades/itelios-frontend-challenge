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
            <button class="glide__bullet" data-glide-dir="=0"></button>
            <button class="glide__bullet" data-glide-dir="=1"></button>
            <button class="glide__bullet" data-glide-dir="=2"></button>
          </div>
        </div>
      </div>`
  }
}
