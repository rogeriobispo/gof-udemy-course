import Bike from "./Bike";
import IVehicle from "./IVehicle";
import Transport from "./Transport";

export default class BikeTransport extends Transport {
  protected createTransport(): IVehicle {
    return new Bike()
  }

}