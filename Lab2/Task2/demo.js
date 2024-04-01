const customMod = require('./modules/flightModule');

let Flight = customMod.Flight;


let ticket = new Flight(14,101,'ABC','XYZ',Date());
console.log(ticket.displayInfo());
// ticket.updateSeatNUm(15);
// ticket.updateFlightNum(404);
// ticket.updateDepartureAirport('CDE');
// ticket.updateArrivalAirport('FGI');
// ticket.updateTravelingDate(Date());

