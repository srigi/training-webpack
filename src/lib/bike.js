'use strict';

import Vehicle from './vehicle';


class Bike extends Vehicle {
  signalsRing() {
    return this.name + ' is ringing';
  }
}


export default Bike;
