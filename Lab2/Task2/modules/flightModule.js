class Flight {
  
  #seatNum;
  #flightNum;
  #departureAirport
  #arrivalAirport;
  #travelingDate;

  constructor(seatNum,flightNum,departureAirport,arrivalAirport,travelingDate){
    this.#seatNum = seatNum;
    this.#flightNum = flightNum;
    this.#departureAirport = departureAirport;
    this.#arrivalAirport = arrivalAirport;
    this.#travelingDate = travelingDate;
  }
  displayInfo() {
    console.log(`Seat Number: ${this.#seatNum}`);
    console.log(`Flight Number: ${this.#flightNum}`);
    console.log(`Departure Airport: ${this.#departureAirport}`);
    console.log(`Arrival Airport: ${this.#arrivalAirport}`);
    console.log(`Travelling Date: ${this.#travelingDate}`);
  }

  getSeatNUm(){
    return seatNum;
  }

  getFlightNum(){
    return flightNum;
  }
  
  getDepartureAirport(){
    return departureAirport;
  }

  getArrivalAirport(){
    return arrivalAirport;
  }

  getTravelingDate(){
    return travelingDate;
  }

  updateSeatNUm(seatNum){
    this.#seatNum = seatNum;
  }

  updateFlightNum(flightNum){
    this.#flightNum = flightNum;
  }
  
  updateDepartureAirport(departureAirport){
    this.#departureAirport = departureAirport;
  }

  updateArrivalAirport(arrivalAirport){
    return this.#arrivalAirport = arrivalAirport;
  }

  updateTravelingDate(travelingDate){
    return this.#travelingDate = travelingDate;
  }
}

module.exports = {Flight}