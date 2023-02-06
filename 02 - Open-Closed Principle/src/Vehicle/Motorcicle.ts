import Vehicle from "./Vehicle";

export default class Motorcicle extends Vehicle {
  constructor(
    private color: string,
    private year: number,
    private engine: number,
  ){
    super()
  }

}