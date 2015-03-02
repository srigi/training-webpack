'use strict';


var Bike = function(name) {
  Vehicle.call(this, name);
};

Bike.prototype = Object.create(Vehicle.prototype);

Bike.prototype.signalsRing = function() {
  return this.name + ' is ringing';
};

_.defaults(Bike, Vehicle);