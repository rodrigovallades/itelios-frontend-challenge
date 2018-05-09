import './Card.scss'

export class Card {

  constructor(product) {
    const { businessId, imageName, name, price } = product;
    const { paymentConditions } = product.productInfo;
    this.businessId = businessId
    this.imageName = imageName
    this.name = name
    this.price = price
    this.paymentConditions = paymentConditions
  }

  render() {
    return `
      <div class="product">
        <div class="product__image"><img src="${this.imageName}" alt="${this.businessId}" /></div>
        <div class="product__name">${this.name}</div>
        <div class="product__price">Por: <span>${this.price}</span></div>
        <div class="product__conditions">${this.paymentConditions}</div>
        <div class="product__actions">
          <div class="product__actions--add">Adicionar ao carrinho <i class="material-icons">add_shopping_cart</i></div>
        </div>
      </div>
    `
  }
}
