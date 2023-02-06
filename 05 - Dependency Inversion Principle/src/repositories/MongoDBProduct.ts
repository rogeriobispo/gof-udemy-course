import Iproduct from "./IProduct";

export default class MongoDBProduct implements Iproduct {

  findById(id: number) {
    return {
      id: id,
      name: 'Produto achado no mongodb product'
    }
  } 
}