// the "Card" module is used to construct each of the products

import './Card.scss'

export class Card {

  constructor(product) {
    this.businessId = product.businessId
    this.imageName = product.imageName
    this.name = product.name
    this.price = product.price
    this.paymentConditions = product.productInfo.paymentConditions
  }

  render() {
    return `
      <div class="product glide__slide">
        <div class="product__border">
          <div class="product__image"><img src="${this.imageName}" alt="${this.businessId}" /></div>
          <div class="product__name">${this.name}</div>
          <div class="product__price">Por: <span>${this.price}</span></div>
          <div class="product__conditions">${this.paymentConditions}</div>
        </div>
        <div class="product__actions">
          <div class="product__actions--add">Adicionar ao carrinho <i class="material-icons">add_shopping_cart</i></div>
        </div>
      </div>
    `
  }
}
