'use strict';


class Vehicle {
  constructor(name) {
    this.name = name;
  }

  drive() {
    return this.name + ' is driving';
  }

  static someStaticShit() {
    return 'Vehicle::someStaticShit';
  }
}


export default Vehicle;
