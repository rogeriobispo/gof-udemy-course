import DBProductFactory from "../factory/DBProductFactory";

export default class Payment {
  pay(productId: number): void {
    const dbProduct = DBProductFactory.create();
    console.log(typeof dbProduct)
    const product = dbProduct.findById(productId)
    console.log(product)
  }
}