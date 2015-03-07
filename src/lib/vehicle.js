'use strict';


var Vehicle = function(name) {
  this.name = name;
};

Vehicle.prototype.drive = function() {
  return this.name + ' is driving';
};

Vehicle.someStaticShit = function() {
  return 'Vehicle::someStaticShit';
};


module.exports = Vehicle;
