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
      <div class='product'>
        <div class='product__imageName'><img src='${this.imageName}' /></div>
        <div class='product__name'>${this.name}</div>
        <div class='product__price'>Por: <span>${this.name}</span></div>
        <div class='product__paymentConditions'>${this.paymentConditions}</div>
      </div>
    `
  }
}
