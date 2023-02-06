import Iproduct from "./IProduct";

export default class MySQLProduct implements Iproduct {

  findById(id: number) {
    return {
      id: id,
      name: 'Produto achado no MYSQL'
    }
  } 
}