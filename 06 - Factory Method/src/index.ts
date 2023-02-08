import BikeTransport from "./transports/BikeTransport";
import CarTransport from "./transports/CarTransport"
import MotorClicleTransport from "./transports/MotorCicleTransport";
import Transport from "./transports/Transport"

declare var process

let transport: Transport

if(process.argv.includes("--uber")){
  transport = new CarTransport();
} else if(process.argv.includes("--log")) {
  transport = new MotorClicleTransport()
} else if(process.argv.includes("--bike")) {
  transport = new BikeTransport;
} else {
  console.error("tipo de transporte não informado");
}
if(transport) {
  transport.startTransport()
}

