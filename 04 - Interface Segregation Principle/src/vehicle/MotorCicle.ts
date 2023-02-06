import IVehicle from "./IVehicle";
import { IConfigurationMotorCycle } from "./IVehicle";

export default class MotorCycle implements IVehicle{
  constructor(
    color: string,
    year: number,
    engine: number,
    ) {
      this.configurationMotorCycle(color, year, engine)
      this.startVehicle()
  }
  startVehicle(): void {
    console.log('Ligando os motores');
  }

  configurationMotorCycle(color: string, year: number, engine: number): void {
   console.log(`
     Moto cor ${color}, 
     Ano: ${year},
     motor: ${engine}, 
   `)
  }

}