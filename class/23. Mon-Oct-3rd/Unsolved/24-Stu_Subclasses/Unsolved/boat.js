// TODO: Import the parent class
const vehicle = require('./vehicle')
const vehicle = new vehicle()
// TODO: Create a `Boat` class that extends the `Vehicle` class
class boat extends vehicle{
  
  constructor(id, type, crew) {
    super(id, 0, 'bwon')
    this.type = type;
    this.crew = crew;
  }

  useHorn() {
    console.log(this.sound)
  }

  crewSoundOff() {
    
  }
  
  
}

const boatPassengers = [
  'Blackbeard',
  'Mary Read',
  'Henry Morgan',
  'Madame Cheng',
];

const boat = new Boat(16, 'sailboat', boatPassengers);

console.log('---BOAT---');
boat.printInfo();
boat.useHorn();
boat.crewSoundOff();
