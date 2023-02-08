import IVehicle from "./IVehicle";

export default class Bike implements IVehicle{
  startRoute(): void {
    this.getCargo()
    console.log("iniciando entrega proxima")
  }
  getCargo(): void {
    console.log("Pegando carga apropriada para bikes")
  }

}