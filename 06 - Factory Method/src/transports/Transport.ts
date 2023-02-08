import IVehicle from "./IVehicle";

export default abstract class Transport {
  startTransport(): void {
    const vehicle = this.createTransport();
    vehicle.startRoute()
  }

  protected abstract createTransport(): IVehicle;
}