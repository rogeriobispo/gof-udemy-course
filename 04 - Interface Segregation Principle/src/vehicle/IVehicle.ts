export default interface IVehicle {
  startVehicle(): void;
}

export interface IConfigurationCar {
  configurationCar(color: string, year: number, engine: number, seats: number): void;
}

export interface IConfigurationMotorCycle {
  configurationMotorCycle(color: string, year: number, engine: number): void;
}