import IVehicle from "./IVehicle";

export default class MotorClicle implements IVehicle {
  startRoute(): void {
    this.getCargo()
    console.log("iniciando entrega")
  }
  getCargo(): void {
    console.log("Ja pegamos a encomenda")
  }

}