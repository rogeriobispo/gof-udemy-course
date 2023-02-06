import IVehicle from "./IVehicle";
import { IConfigurationCar } from "./IVehicle";

export default class Car implements IVehicle, IConfigurationCar {
  constructor(
    color: string,
    year: number,
    engine: number,
    seats: number
    ) {
      this.configurationCar(color, year, engine, seats)
      this.startVehicle()
  }
  startVehicle(): void {
    console.log('Ligando os motores');
  }
  configurationCar(color: string, year: number, engine: number, seats: number): void {
   console.log(`
     Carro cor ${color}, 
     Ano: ${year},
     motor: ${engine}, 
     Assentos: ${seats}
   `)
  }
}