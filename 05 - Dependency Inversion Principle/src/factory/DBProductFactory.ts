import DB from "../repositories/Db";
import Iproduct from "../repositories/IProduct";
import MongoDBProduct from "../repositories/MongoDBProduct";
import MySQLProduct from "../repositories/MySQLProduct";

export default class DBProductFactory {
  private static type: DB = DB.MYSQL 
  public static create(): Iproduct {
    return {
      0: new MySQLProduct(),
      1: new MongoDBProduct()
    }[`${DBProductFactory.type}`]
  }
}