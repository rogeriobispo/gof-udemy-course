import IVehicle from "./IVehicle";

export default class Car implements IVehicle {
  startRoute(): void {
    this.getCargo()
    console.log("iniciando rota" )
  }
  getCargo(): void {
    console.log("Pegamos os passageiros estamos prontos")
  }
}