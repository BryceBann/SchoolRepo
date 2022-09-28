// TODO: Add a comment describing what kind of function this is
//a constructor function 
function Character(name, type, age, strength, hitpoints) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
//pulling up the specified function and options
Character.prototype.printStats = function () {
  console.log(
    `Name: ${this.name}\nProfession: ${this.type}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`
  );
  console.log('\n-------------\n');
};

// TODO: Add a comment describing the functionality of this method
//pulling the data and sending through the functions to see if the player is still alive
Character.prototype.isAlive = function () {
  if (this.hitpoints > 0) {
    console.log(`${this.name} is still alive!`);
    console.log('\n-------------\n');
    return true;
  }
  console.log(`${this.name} has died!`);
  return false;
};

// TODO: Add a comment describing the functionality of this method
//takes one the classes and subtracts from the other hitpoints
Character.prototype.attack = function (character2) {
  character2.hitpoints -= this.strength;
};

// TODO: Add a comment describing the functionality of this method
//increase certian parts of a certin character class
Character.prototype.levelUp = function () {
  this.age += 1;
  this.strength += 5;
  this.hitpoints += 25;
};

const warrior = new Character('Crusher', 'Warrior', 25, 10, 75);
const rogue = new Character('Dodger', 'Rogue', 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);

// TODO: Add a comment describing what you expect to see printed in the console
//will print all the stats of the warrioe
warrior.printStats();

// TODO: Add a comment describing what you expect to see printed in the console
//will check the warrior hit points to see if they are still alive 
warrior.isAlive();

//increase the stats of the rouge player
rogue.levelUp();

// TODO: Add a comment describing what you expect to see printed in the console
//the stats of the rouge player
rogue.printStats();
