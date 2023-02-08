import Car from "./Car";
import IVehicle from "./IVehicle";
import Transport from "./Transport"

export default class CarTransport extends  Transport {
  protected createTransport(): IVehicle {
    return new Car()
  }

}