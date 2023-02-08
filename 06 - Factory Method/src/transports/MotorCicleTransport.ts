import IVehicle from "./IVehicle";
import MotorClicle from "./MotoCicle";
import Transport from "./Transport";

export default class MotorClicleTransport extends Transport {
  protected createTransport(): IVehicle {
    return new MotorClicle()
  }
  
}