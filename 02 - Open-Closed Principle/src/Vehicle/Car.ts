import Vehicle  from "./Vehicle";

export default class Car extends Vehicle {
  constructor(
    private color: string,
    private year: number,
    private engine: number,
    private seats: number,
    private doors: number
  ){
    super()
  }
}